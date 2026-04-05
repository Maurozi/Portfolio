import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Nav from './Nav.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'

function App() {
  const location = useLocation()

  return (
    <main className="portfolio">
      <Nav />
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
