document.addEventListener('DOMContentLoaded', () => {
    loadSavedNotes();
    setupEventListeners();
});

function loadSavedNotes() {
    chrome.storage.local.get(['researchNotes'], function(result) {
        if (result.researchNotes) {
            document.getElementById('notes').value = result.researchNotes;
        }
    });
}

function setupEventListeners() {
    document.getElementById('summarizeBtn').addEventListener('click', summarizeText);
    document.getElementById('saveNotesBtn').addEventListener('click', saveNotes);
}

async function summarizeText() {
    try {
        const summarizeBtn = document.getElementById('summarizeBtn');
        summarizeBtn.disabled = true;
        summarizeBtn.innerHTML = '<span class="btn-icon">⏳</span> Processing...';

        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tab) {
            showResult("No active tab found.", 'error');
            resetButton(summarizeBtn);
            return;
        }

        const [{result}] = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => window.getSelection().toString()
        });

        if (!result || result.trim() === '') {
            showResult("Please select some text on the page to summarize.", 'info');
            resetButton(summarizeBtn);
            return;
        }

        const response = await fetch('http://localhost:8080/api/research/process', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: result, operation: "summarize"})
        });

        if (!response.ok) {
            const errBody = await response.text().catch(() => '');
            console.error('Summarize failed', response.status, response.statusText, errBody);
            showResult(`Server Error ${response.status}: ${response.statusText}. ${errBody}`, 'error');
            resetButton(summarizeBtn);
            return;
        }

        const text = await response.text();
        console.log('Summary received:', text.substring(0, 100) + '...');
        showResult(text, 'success');
        resetButton(summarizeBtn);

    } catch (error) {
        console.error('Summarize error:', error);
        showResult(`Error: ${error.message}`, 'error');
        resetButton(document.getElementById('summarizeBtn'));
    }
}

function resetButton(btn) {
    btn.disabled = false;
    btn.innerHTML = '<span class="btn-icon">✨</span> Summarize Selected Text';
}

function saveNotes() {
    const notes = document.getElementById('notes').value;
    const saveBtn = document.getElementById('saveNotesBtn');
    const originalText = saveBtn.innerHTML;

    chrome.storage.local.set({'researchNotes': notes}, function() {
        saveBtn.innerHTML = '<span class="btn-icon">✓</span> Saved!';
        saveBtn.classList.add('saved');

        setTimeout(() => {
            saveBtn.innerHTML = originalText;
            saveBtn.classList.remove('saved');
        }, 2000);
    });
}

function showResult(content, type = 'info') {
    const resultsEl = document.getElementById('results');
    const escaped = escapeHtml(typeof content === 'string' ? content : String(content));
    const withBreaks = escaped.replace(/\n/g, '<br>');

    resultsEl.innerHTML = `
        <div class="result-item">
            <div class="result-content ${type ? 'text-' + type : ''}">
                ${withBreaks}
            </div>
        </div>`;
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
