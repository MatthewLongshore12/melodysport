import React from 'react';
// import '../stylesheets/navbar.css';
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="navbar">
      <div className="logo">MelodysPort</div>
      <ul className="nav-links">
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink to='/services'>Services</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;