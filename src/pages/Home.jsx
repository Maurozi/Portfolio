import { useRef } from "react"
import "./Home.css"
import { motion as Motion } from "motion/react"
import yvPhone1 from "../assets/YV-phone1.png"
import yvPhone2 from "../assets/YV-phone2.png"
import chatbotBanner from "../assets/Chatbot-banner.png"
import chatbotChat from "../assets/Chatbot-chat.png"
import ceBanner from "../assets/CE-banner.png"
import cePhone1 from "../assets/CE-phone1.png"
import diplomaImage from "../assets/Diploma.png"

function Home() {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delayChildren: 0.1,   // wait a bit before children start
        staggerChildren: 0.1 // each child starts later than previous
      }
    }
  }

  const childFadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" } // slower child pop-up
    }
  }

  const projectHover = { scale: 1.03 }
  const projectHoverTransition = { duration: 0.1, ease: "ease" }

  return (
    <section className="home" >

      <header>
        <Motion.div className="hero-text" variants={fadeUp} initial="hidden" animate="show">
          <Motion.p variants={childFadeUp}>Portfolio website</Motion.p>
          <Motion.h1 variants={childFadeUp}>Mauro van der Duim</Motion.h1>
          <Motion.div className="hero-buttons" variants={childFadeUp}>
            <button onClick={scrollToAbout}>About Me</button>
            <button onClick={scrollToContact}>Contact</button>
            <div className="socials-anchors">
              <a href="https://www.linkedin.com/in/mauro-van-der-duim-79770b3b9"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg></a>
              <a href="https://github.com/Maurozi"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
              </svg>
              </a>
              <a href="https://www.instagram.com/maurovanderduim/"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
              </svg>
              </a>
            </div>
          </Motion.div>
        </Motion.div>
        <Motion.div
          className="view-projects-hero"
          variants={childFadeUp}
          initial="hidden"
          animate="show"
          onClick={scrollToProjects}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              scrollToProjects()
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Scroll to projects"
        >
          <h1>VIEW PROJECTS</h1>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>
        </Motion.div>
      </header>

      <Motion.div className="home-projects" ref={projectsRef} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="project-list">
          <Motion.img className="project-image portrait project-yv-primary" src={yvPhone1} alt="Project Image" variants={childFadeUp} whileHover={projectHover} transition={projectHoverTransition} />
          <Motion.img className="project-image landscape project-chat-banner" src={chatbotBanner} alt="Project Image" variants={childFadeUp} whileHover={projectHover} transition={projectHoverTransition} />
          <Motion.img className="project-image portrait project-yv-secondary" src={yvPhone2} alt="Project Image" variants={childFadeUp} whileHover={projectHover} transition={projectHoverTransition} />
          <Motion.img className="project-image portrait project-chat-card" src={chatbotChat} alt="Project Image" variants={childFadeUp} whileHover={projectHover} transition={projectHoverTransition} />
          <Motion.img className="project-image portrait project-codeexchange-phone" src={cePhone1} alt="Project Image" variants={childFadeUp} whileHover={projectHover} transition={projectHoverTransition} />
          <Motion.img className="project-image landscape project-codeexchange-banner" src={ceBanner} alt="Project Image" variants={childFadeUp} whileHover={projectHover} transition={projectHoverTransition} />
        </div>
      </Motion.div>

      <Motion.div className="about-me" ref={aboutRef} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <Motion.div className="about-me-content" variants={childFadeUp}>
          <h1>About me</h1>
          <p>
            Hi, I’m Mauro. I’m a Software Engineering student at the Amsterdam University of Applied Siences (HvA) and a developer at a creative agency in Haarlem. Based in Den Helder, I specialize in the sweet spot between clean design and solid code.
          </p>
          <p>What I bring to the table:
          </p>
          <ul>
            <li>Professional Workflow: I work with Agile/Scrum and real Product Owners to deliver structured results.</li>
            <li>Design & Code: I take projects from Figma designs to fully deployed applications.</li>
            <li>Clear Communication: I’m great at explaining technical "code talk" in simple language that anyone can understand.</li>
          </ul>
          <button>Download resume <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd" />
          </svg>
          </button>
        </Motion.div>
        <img src={diplomaImage} alt="Diploma" />
      </Motion.div>

      <Motion.div className="contact" variants={childFadeUp} ref={contactRef} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <h1>Contact</h1>
        <Motion.div className="contact-form" variants={childFadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p>Feel free to reach out! I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className="contact-information">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
          </div>
          <textarea type="text" placeholder="Message" />
          <button>Send <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd" />
          </svg>
          </button>
        </Motion.div>
        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/mauro-van-der-duim-79770b3b9"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
          </svg></a>
          <a href="https://github.com/Maurozi"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
          </svg>
          </a>
          <a href="https://www.instagram.com/maurovanderduim/"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
          </svg>
          </a>
        </div>
      </Motion.div>

    </section >
  )
}

export default Home
