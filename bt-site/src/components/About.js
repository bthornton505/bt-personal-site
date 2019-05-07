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
              After working at the NBA for two years as a Phantom Camera Technician/Production Assistant,
              I found myself at a crossroads. I no longer felt I was growing as a young professional
              and realized I no longer enjoyed the career I had studied in college.
            </p>
            <p>
              This pushed me to explore new opportunities which led me to discover the
              Flatiron School, a programming bootcamp, and enroll in an online full-stack developer course.
              I had no experience with code but always had a love for solving problems, and coding was just what I needed.
            </p>
            <p>
              Fast-forward 10 months from when I started and I have officially graduated
              from this course with experience in building apps with Ruby on Rails, React, and a list of other technologies.
            </p>
            <p>
              The skills I have learned throughout this process have truly been life
              changing and I know that whatever challenges I am faced with can be overcome.
              This mindset is something I will bring with me everyday into the workplace,
              and given the chance to join your team, I will prove that my work ethic will be my strongest quality.
            </p>
          </Col>
        </Row>

      </div>
    </section>
  )
}

export default About
