import React from 'react'
import '../Site.css'

const Header = () => {

  return(
    <section id="navbar">
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-white p-4">
            <a className="navbar-links" href="https://drive.google.com/file/d/1qlUIAVyZoPyd6DKgkKW6vs7d60CpqBqs/view?usp=sharing">
              Resume
            </a>
            <a className="navbar-links" href="https://medium.com/@thorntonbrenden">
              Blog
            </a>
          </div>
        </div>
        <nav class="navbar navbar-light bg-white">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </section>
  )
}

export default Header;

// <ul id="bt-navbar">
//   <li className="navbar-nav">
//     <a className="navbar-links" href="/about">About</a>
//   </li>
//   <li className="navbar-nav">
//     <a className="navbar-links" href="/projects">Projects</a>
//   </li>
//   <li className="navbar-nav">
    // <a className="navbar-links" href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Aedc78e2c-0fac-4dd8-94a4-706b2b6ad54f">
    //   Resume
    // </a>
//   </li>
//   <li className="navbar-nav">
//     <a className="navbar-links" href="/contact">Contact</a>
//   </li>
// </ul>

// <nav class="nav flex-column">
// </nav>
