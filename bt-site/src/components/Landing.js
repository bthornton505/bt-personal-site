import React from 'react'
import Mountains from '../images/mountains_v7.PNG'

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
