import { useEffect, useState } from 'react'
import './Home.css'
import Hero from "../assets/Hero.svg"
import Gif from "../assets/gif.gif"
import Gif2 from "../assets/gif2.gif"
import { NavLink } from 'react-router-dom'

export default function Home() {
  const heroImages = [Gif, Gif2]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((previousIndex) =>
        (previousIndex + 1) % heroImages.length
      )
    }, 2500)

    return () => clearInterval(intervalId)
  }, [heroImages.length])

  return (
    <>
      <header className="home-hero">
        <div className='home-div'>
          <div className='home-text'>
            <h1 className="home-title">Porftolio</h1>
            <p className="home-intro">
              I design and build clean digital products with a focus on usability,
              speed, and clarity.
            </p>
            <div className="home-buttons">
              <NavLink to="/projects">
                <button className="project-button">View Projects</button>
              </NavLink>
              <NavLink to="/contact">
                <button className="contact-button">Contact Me</button> 
              </NavLink>
            </div>
          </div>
          <img src={heroImages[currentImageIndex]} alt="Hero" className="hero-image" />
        </div>
      </header>
    </>
  )
}
