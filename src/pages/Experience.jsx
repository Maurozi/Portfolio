import Reactlogo from "../assets/React-icon.png"
import './Experience.css'

export default function Experience() {
    return (
        <section className="experience-page">
            <header>
                <h1>Experience</h1>
                <p>Here are some of the technologies I've worked with:</p>
            </header>
            <section className="code-section">
                <section className="category-block">
                    <h3 className="category-title">Front-end</h3>
                    <div className='code-cards'>
                        <div className='code-card'>
                            <h4>React</h4>
                            <p>JavaScript library for building user interfaces</p>
                            <img src={Reactlogo} alt="React logo" className="code-logo" />
                        </div>
                        <div className='code-card'>
                            <h4>JavaScript</h4>
                            <p>Programming language for building interactive web applications</p>
                            <img src={Reactlogo} alt="React logo" className="code-logo" />
                        </div>
                        <div className='code-card'>
                            <h4>TypeScript</h4>
                            <p>Typed superset of JavaScript that compiles to plain JavaScript</p>
                            <img src={Reactlogo} alt="React logo" className="code-logo" />
                        </div>
                        <div className='code-card'>
                            <h4>Vue.js</h4>
                            <p>Progressive JavaScript framework for building user interfaces</p>
                            <img src={Reactlogo} alt="React logo" className="code-logo" />
                        </div>
                    </div>
                </section>

                <section className="category-block">
                    <h3 className="category-title">Backend</h3>
                    <div className='code-cards'>
                        <div className='code-card'>
                            <h4>Node.js</h4>
                            <p>Runtime for building scalable server-side JavaScript applications</p>
                            <img src={Reactlogo} alt="Tech logo" className="code-logo" />
                        </div>
                        <div className='code-card'>
                            <h4>Python</h4>
                            <p>High-level programming language for general-purpose coding</p>
                            <img src={Reactlogo} alt="Tech logo" className="code-logo" />
                        </div>
                        <div className='code-card'>
                            <h4>Java</h4>
                            <p>Object-oriented programming language for building scalable applications</p>
                            <img src={Reactlogo} alt="Tech logo" className="code-logo" />
                        </div>
                        <div className='code-card'>
                            <h4>FastAPI</h4>
                            <p>Modern, fast (high-performance) web framework for building APIs with Python</p>
                            <img src={Reactlogo} alt="Tech logo" className="code-logo" />
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}
