import { Link } from "react-router-dom"
import "./Project-page.css"
import chatbotBanner from "../assets/Chatbot-banner.png"
import chatbotChat from "../assets/Chatbot-chat.png"
import ReactLogo from "../assets/code-logos/React.png"
import JavaScriptLogo from "../assets/code-logos/Javascript.png"
import HTMLLogo from "../assets/code-logos/HTML.png"
import CSSLogo from "../assets/code-logos/CSS.png"
import NodeLogo from "../assets/code-logos/Node.png"
import ViteLogo from "../assets/code-logos/Vite.png"
import FastAPILogo from "../assets/code-logos/Fastapi.png"

export default function ChatbotPage() {
    return (
        <main className="project-page">
            <Link className="project-back" to="/" aria-label="Back to portfolio">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                </svg>
            </Link>

            <div>
                <h1>AI Shopping Chatbot</h1>
                <p>Haarlemsewinkels.nl</p>
            </div>

            <div className="project-gallery">
                <img src={chatbotBanner} alt="Chatbot banner" />
                <img src={chatbotChat} alt="Chatbot conversation screen" />
            </div>

            <h2>Description</h2>
            <p>
                AI chatbot project for Haarlemsewinkels.nl, built with a Preact frontend and a FastAPI backend. The system combines conversational 
                UX with product-data synchronization and was designed with scalability in 
                (from an in-process setup toward worker-based architecture for heavier workloads).
            </p>

            <ul>
                Responsibilities:
                <li>Created UI/UX design for the Chatbot</li>
                <li>Built and refined the frontend chat experience with reusable React components and responsive layouts.</li>
                <li>Developed daily datasync with Celery to keep the chatbot up to date</li>
            </ul>

            <div className="code-languages">
                <div className="code-card">
                    <p>React</p>
                    <img src={ReactLogo} alt="React" />
                </div>
                <div className="code-card">
                    <p>JavaScript</p>
                    <img src={JavaScriptLogo} alt="JavaScript" />
                </div>
                <div className="code-card">
                    <p>HTML</p>
                    <img src={HTMLLogo} alt="HTML" />
                </div>
                <div className="code-card">
                    <p>CSS</p>
                    <img src={CSSLogo} alt="CSS" />
                </div>
                <div className="code-card">
                    <p>FastAPI</p>
                    <img src={FastAPILogo} alt="FastAPI" />
                </div>
                <div className="code-card">
                    <p>Node.js</p>
                    <img src={NodeLogo} alt="Node.js" />
                </div>
                <div className="code-card">
                    <p>Vite</p>
                    <img src={ViteLogo} alt="Vite" />
                </div>
            </div>

            <button onClick={() => window.open("https://github.com/Maurozi/Shopping-assistant-chatbot", "_blank", "noopener,noreferrer")}>
                To Github repository
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                </svg>
            </button>
        </main>
    )
}