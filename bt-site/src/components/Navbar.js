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
          <a className="navbar-links" href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Aedc78e2c-0fac-4dd8-94a4-706b2b6ad54f">
            Resume
          </a>
        </li>
        <li className="navbar-nav">
          <a className="navbar-links" href="/contact">Contact</a>
        </li>
      </ul>
    </section>
  )
}

export default Header;
