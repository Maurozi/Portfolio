import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <div className="navbar">
                <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/experience" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
                    Experience
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
                    Contact
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
                    About
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav