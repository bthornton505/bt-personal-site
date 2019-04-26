import React from 'react'
import '../Site.css'

const Header = () => {

  return(
    <section id="navbar">
      <ul id="bt-navbar">
        <li className="navbar-nav">
          <a className="navbar-links" href="/about">About</a>
        </li>
        <li className="navbar-nav">
          <a className="navbar-links" href="/projects">Projects</a>
        </li>
        <li className="navbar-nav">
          <a className="navbar-links" href="/resume">Resume</a>
        </li>
        <li className="navbar-nav">
          <a className="navbar-links" href="/contact">Contact</a>
        </li>
      </ul>
    </section>
  )
}

export default Header;
