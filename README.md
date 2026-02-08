# SnapSummary – AI Text Summarizer Chrome Extension

A full-stack Chrome extension that summarizes selected text using AI and stores summaries through a Spring Boot backend.

Users can highlight text on any webpage, generate an instant AI summary, and save it for later reference.

---

## 🚀 Features

- Summarize selected webpage text instantly
- AI-powered summarization using Gemini API
- Save and retrieve summaries
- Spring Boot REST backend
- Chrome extension popup UI
- JSON request/response communication
- Fast and lightweight architecture

---

## 🛠 Tech Stack

### Frontend (Chrome Extension)
- HTML
- CSS
- JavaScript
- Chrome Extension APIs

### Backend
- Spring Boot
- REST APIs
- Lombok
- Gemini API integration
- JSON processing (Jackson)

---

## ⚙️ How It Works

1. User highlights text on a webpage
2. Extension captures selected text
3. Request sent to Spring Boot backend
4. Backend calls Gemini API
5. AI summary is generated
6. Summary returned to extension
7. Summary displayed and saved

---

## 📂 Project Structure

```
SnapSummary/
│
├── extension/                  # Chrome extension frontend
│   ├── manifest.json
│   ├── background.js
│   ├── sidepanel.html
│   ├── sidepanel.js
│   └── sidepanel.css
│
├── backend/                    # Spring Boot backend
│   ├── pom.xml
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/snapsummary/backend/
│           │       ├── config/
│           │       ├── controller/
│           │       ├── service/
│           │       ├── model/
│           │       └── SnapSummaryApplication.java
│           │
│           └── resources/
│               ├── application.properties
│               └── static/
│
└── README.md
```

---

## 🔧 Installation

### Backend (Spring Boot)

Clone the repository:

```bash
git clone https://github.com/your-username/snapsummary.git
```

Navigate to backend folder:

```bash
cd backend
```

Add your Gemini API key in:

```
src/main/resources/application.properties
```

```
gemini.api.key=YOUR_API_KEY
```

Run the backend server:

```bash
./mvnw spring-boot:run
```

Server runs at:

```
http://localhost:8080
```

---

### Chrome Extension

1. Open Chrome
2. Go to:

```
chrome://extensions/
```

3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the `extension/` folder

Extension is now installed 🎉

---

## 📌 Usage

1. Highlight text on any webpage
2. Click the SnapSummary extension icon
3. Get instant AI summary
4. Save the summary

---

## 🔮 Future Improvements

- Multiple summary styles (short / bullet / detailed)
- User authentication
- Cloud database storage
- Dark/light theme
- Summary history dashboard
- Multi-language support

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to improve.

---



## 👨‍💻 Author

**Utkarsh Tiwari**  
Java Full Stack Developer

LinkedIn: https://www.linkedin.com/in/utkarsh-tiwari-a73653260/  

---

⭐ If you like this project, consider giving it a star!
