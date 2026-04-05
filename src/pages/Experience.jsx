import { useState } from "react"
import Reactlogo from "../assets/React-icon.png"
import JavaScriptLogo from "../assets/JavaScript-logo.png"
import TypeScriptLogo from "../assets/typescript.svg"
import VueLogo from "../assets/Vue-logo.png"
import NodeLogo from "../assets/Node-logo.png"
import PythonLogo from "../assets/Python-logo.png"
import JavaLogo from "../assets/Java-logo.png"
import FastAPILogo from "../assets/Fastapi-logo.png"
import './Experience.css'

export default function Experience() {
    const [selectedCategory, setSelectedCategory] = useState("frontend")

    return (
        <section className="experience-page">
            <header>
                <h1>Experience</h1>
                <p>Here are some of the technologies I've worked with:</p>
                   <select
                    name="category-selector"
                    className="selector"
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                >
                    <option value="frontend">Front-end</option>
                    <option value="backend">Backend</option>
                </select>
            </header>

            <section className="code-section">

                {selectedCategory === "frontend" && (
                    <section className="category-block">
                        <div className='code-cards'>
                            <div className='code-card'>
                                <h4>React</h4>
                                <p>JavaScript library for building user interfaces</p>
                                <img src={Reactlogo} alt="React logo" className="code-logo" />
                            </div>
                            <div className='code-card'>
                                <h4>JavaScript</h4>
                                <p>Programming language for building interactive web applications</p>
                                <img src={JavaScriptLogo} alt="JavaScript logo" className="code-logo" />
                            </div>
                            <div className='code-card'>
                                <h4>TypeScript</h4>
                                <p>Typed superset of JavaScript that compiles to plain JavaScript</p>
                                <img src={TypeScriptLogo} alt="TypeScript logo" className="code-logo" />
                            </div>
                            <div className='code-card'>
                                <h4>Vue.js</h4>
                                <p>Progressive JavaScript framework for building user interfaces</p>
                                <img src={VueLogo} alt="Vue.js logo" className="code-logo" />
                            </div>
                        </div>
                    </section>
                )}

                {selectedCategory === "backend" && (
                    <section className="category-block">
                        <div className='code-cards'>
                            <div className='code-card'>
                                <h4>Node.js</h4>
                                <p>Runtime for building scalable server-side JavaScript applications</p>
                                <img src={NodeLogo} alt="Node.js logo" className="code-logo" />
                            </div>
                            <div className='code-card'>
                                <h4>Python</h4>
                                <p>High-level programming language for general-purpose coding</p>
                                <img src={PythonLogo} alt="Python logo" className="code-logo" />
                            </div>
                            <div className='code-card'>
                                <h4>Java</h4>
                                <p>Object-oriented programming language for building scalable applications</p>
                                <img src={JavaLogo} alt="Java logo" className="code-logo" />
                            </div>
                            <div className='code-card'>
                                <h4>FastAPI</h4>
                                <p>Modern, fast (high-performance) web framework for building APIs with Python</p>
                                <img src={FastAPILogo} alt="FastAPI logo" className="code-logo" />
                            </div>
                        </div>
                    </section>
                )}
            </section>
        </section>
    )
}
