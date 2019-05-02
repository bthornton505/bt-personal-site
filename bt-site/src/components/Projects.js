import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Projects = () => {

  return(
    <section id="projects">
      <Container id="projects-container">
        <h2>Projects</h2>
        <h3>Check out some of my work!</h3>

        <Row className="justify-content-center">
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Plantify</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </section>
  )
}

export default Projects
