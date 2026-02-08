# SnapSummery – AI Text Summarizer Chrome Extension

A full-stack Chrome extension that summarizes selected text using AI and saves responses through a Spring Boot backend.

Users can highlight text on any webpage, generate an instant AI summary, and store summaries for later reference.

---

## 🚀 Features

- Select any text on a webpage and summarize instantly
- AI-powered summarization using Gemini API
- Save generated summaries
- Spring Boot backend REST API
- Chrome extension popup UI
- Clean JSON request/response handling
- Lightweight and fast

---

## 🛠 Tech Stack

**Frontend (Extension)**
- HTML
- CSS
- JavaScript
- Chrome Extension APIs

**Backend**
- Spring Boot
- Lombok
- REST APIs
- Gemini API integration

---

## ⚙️ How It Works

1. User selects text on a webpage
2. Chrome extension captures selected text
3. Extension sends request to Spring Boot backend
4. Backend calls Gemini API
5. AI summary is returned
6. Summary is displayed and saved

---

## 📂 Project Structure

SnapSummary/
│
├── extension/                  # Chrome extension
│   ├── manifest.json
│   ├── background.js
│   ├── sidepanel.html
│   ├── sidepanel.js
│   ├── sidepanel.css
│   └── assets/
│
├── backend/                    # Spring Boot app
│   ├── pom.xml
│   └── src/
│       └── main/
│           ├── java/com/generativeAi/aisummary/
│           │   ├── config/
│           │   ├── controller/
│           │   ├── service/
│           │   ├── model/
│           │   ├── dto/
│           │   └── AiSummaryApplication.java
│           │
│           └── resources/
│               ├── application.properties
│               └── static/
│
└── README.md

---

## 🔧 Installation

### Backend (Spring Boot)

1. Clone repository

```
git clone https://github.com/your-username/sumkeeper.git
```

2. Navigate to backend folder

```
cd backend
```

3. Add your Gemini API key in:

```
application.properties
```

```
gemini.api.key=YOUR_API_KEY
```

4. Run Spring Boot server

```
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

- Highlight any text on a webpage
- Click the extension icon
- Get instant AI summary
- Save the summary

---

## 🔮 Future Improvements

- Multiple summary styles (short / bullet / detailed)
- Authentication & user accounts
- Cloud database storage
- Dark/light UI mode
- History dashboard
- Language toggle

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Utkarsh Tiwari  
Java Full Stack Developer  
LinkedIn: https://www.linkedin.com/in/utkarsh-tiwari-a73653260/  


---

⭐ If you like this project, consider giving it a star!

