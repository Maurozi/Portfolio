import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Nav.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <main className="portfolio">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  )
}

export default App
