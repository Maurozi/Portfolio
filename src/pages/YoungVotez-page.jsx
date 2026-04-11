import { Link } from "react-router-dom"
import "./Project-page.css"
import yvPhone1 from "../assets/YV-phone1.png"
import yvPhone2 from "../assets/YV-phone2.png"
import yvBanner1 from "../assets/YV-banner1.png"
import yvBanner2 from "../assets/YV-banner2.png"
import Java from "../assets/code-logos/Java.png"
import Vue from "../assets/code-logos/Vue.png"
import TypeScript from "../assets/code-logos/TypeScript.png"
import HTML from "../assets/code-logos/HTML.png"
import CSS from "../assets/code-logos/CSS.png"
import Vite from "../assets/code-logos/Vite.png"
import Node from "../assets/code-logos/Node.png"
import Spring from "../assets/code-logos/Spring.png"
import Docker from "../assets/code-logos/Docker.png"

export default function YoungVotersPage() {
    return (
        <main className="project-page">
            <Link className="project-back" to="/"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
            </Link>
            <div>
                <h1>Dutch Elections Website</h1>
                <p>YoungVotez</p>
            </div>
            <div className="project-gallery">
                <img src={yvBanner1} alt="YoungVotez banner 1" />
                <img src={yvBanner2} alt="YoungVotez banner 2" />
                <img src={yvPhone1} alt="YoungVotez screen 1" />
                <img src={yvPhone2} alt="YoungVotez screen 2" />
            </div>
            <h2>Description</h2>
            <p>Young Votez is a full-stack Dutch election data platform that processes official election XML datasets and turns them into interactive,
                user-friendly insights for voters. The application combines a Vue 3 frontend (charts, maps, party/candidate views, voting guide, and statistics dashboard) with a
                Spring Boot REST backend and PostgreSQL. It also includes a community layer with authenticated user accounts, profile management,
                forum posts, comments/replies, and protected routes. The architecture is modular and maintainable, using clear separation between API controllers,
                business services, data access, and frontend views/components, and is containerized with Docker for deployment.
            </p>
            <ul> Responsibilities:
                <li>Designed and implemented the frontend using Vue 3, creating interactive charts, maps, and user interfaces for election data visualization.</li>
                <li>Developed the backend REST API with Spring Boot, handling data processing, user authentication, and business logic.</li>
            </ul>
            <div className="code-languages">
                <div className="code-card">
                    <p>Java</p>
                    <img src={Java} alt="Java" />
                </div>
                <div className="code-card">
                    <p>Vue.js</p>
                    <img src={Vue} alt="Vue.js" />
                </div>
                <div className="code-card">
                    <p>TypeScript</p>
                    <img src={TypeScript} alt="TypeScript" />
                </div>
                <div className="code-card">
                    <p>HTML</p>
                    <img src={HTML} alt="HTML" />
                </div>
                <div className="code-card">
                    <p>CSS</p>
                    <img src={CSS} alt="CSS" />
                </div>
                <div className="code-card">
                    <p>Vite</p>
                    <img src={Vite} alt="Vite" />
                </div>
                <div className="code-card">
                    <p>Node.js</p>
                    <img src={Node} alt="Node.js" />
                </div>
                <div className="code-card">
                    <p>Spring</p>
                    <img src={Spring} alt="Spring" />
                </div>
                <div className="code-card">
                    <p>Docker</p>
                    <img src={Docker} alt="Docker" />
                </div>
            </div>
            <button onClick={() => window.open("https://github.com/Maurozi/YoungVotez", "_blank", "noopener,noreferrer")}>
                To Github repository<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                </svg>
            </button>
        </main>
    )
}
