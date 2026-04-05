
import './Home.css'
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
    </>
  )
}
