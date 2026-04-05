import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default Nav