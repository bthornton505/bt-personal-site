import React from 'react'

const Footer = () => {

  return(
    <section id="contact">
      <ul id="contact-content">
        <li className="bt-email">
          <h4>thorntonbrenden@gmail.com</h4>
        </li>
        <li className="bt-social-links">
          <a className="social-icon" href="https://www.linkedin.com/in/brenden-thornton/">
            <i class="fab fa-linkedin-in fa-stack fa-2x"></i>
          </a>
          <a className="social-icon" href="https://github.com/bthornton505">
            <i class="fab fa-github fa-stack fa-2x"></i>
          </a>
          <a className="social-icon" href="https://twitter.com/ThorntonBrenden">
            <i class="fab fa-twitter fa-stack fa-2x"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Footer;
