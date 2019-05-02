import React from 'react'
import Mountains from '../mountains_v1.PNG'

const Landing = () => {

  return(
    <section id="home">
      <div id="landing-picture">
        <img className="landing-image" src={Mountains} alt="mountains"></img>
      </div>
      <div id="main-header">
        <p className="main-title">Brenden Thornton</p>

        <p className="job-title">Full Stack Engineer</p>
      </div>
    </section>
  )
}

export default Landing
