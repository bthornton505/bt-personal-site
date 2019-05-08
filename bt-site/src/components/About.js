import React from 'react'
import { Row, Col } from 'react-bootstrap'

const About = () => {

  return(
    <section id="about">
      <div id="about-container">
        <p className="about-title">About Me</p>
        <Row>
          <Col>
            <h3 className="about-caption">
              Proud Father, Loving Husband, Ambitious Full-Stack Engineer.
            </h3>
            <p>
              In January of 2018 I found myself at a crossroads. After working at
              the NBA for two years as a Phantom Camera Technician/Production Assistant,
              I no longer felt I was growing as a young professional. 
            </p>
            <p>
              This pushed me to explore new opportunities which led me to discover
              the Flatiron School, a programming bootcamp, and enroll in an online
              Full Stack Web Developer course. I had no experience with code but always
              had a love for solving problems, and knew I needed a career that would
              challenge me forever.
            </p>
            <p>
              After ten months of hard work to learn the necessary skills to start
              my coding career, my goal became a reality. Flatiron School gave me the
              opportunity to build applications using Ruby on Rails, React, Redux,
              and a list of other modern technologies.
            </p>
            <p>
              As a goal-oriented person, I thrive on finding new and exciting challenges.
              My current objective is to take the skills I have learned and to join a
              tech company that will allow me to expand my current knowledge.
              I hope I can bring my own unique perspective and personality to a team
              that allows me to contribute meaningful solutions.
            </p>
          </Col>
        </Row>

      </div>
    </section>
  )
}

export default About
