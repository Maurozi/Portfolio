
import './Home.css'
import Reactlogo from "../assets/React-icon.png"
import Hero from "../assets/Hero.svg"

export default function Home() {
  return (
    <>
      <header className="home-hero">
        <div className='home-div'>
            <div className='home-text'>
                <h1 className="home-title">Hi, I'm Mauro</h1>
                <p className="home-intro">
                    I design and build clean digital products with a focus on usability,
                    speed, and clarity.
                </p>
                <div className="home-buttons">
                    <button className="project-button">View Projects</button>
                    <button className="contact-button">Contact Me</button>
                </div>
            </div>
            <img src={Hero} alt="Hero" className="hero-image" />
        </div>  
      </header>
      <section>
        <section className="code-section">
          <h2>Experiences</h2>
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
    </>
  )
}
