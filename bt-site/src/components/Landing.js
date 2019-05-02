import React from 'react'
import Mountains from '../images/mountains_v1.PNG'

const Landing = () => {

  return(
    <section id="home">
      <div id="landing-picture">
        <img className="landing-image" src={Mountains} alt="mountains"></img>
      </div>
    </section>
  )
}

export default Landing

// <div id="main-header">
//   <p className="job-title">Full Stack Engineer</p>
// </div>
