import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ListGroup, ListGroupItem }  from 'react-bootstrap'
import Plantify from '../images/plantify_v2.png'

const Projects = () => {

  return(
    <section id="projects">
      <Container id="projects-container">
        <h2>Projects</h2>
        <h3>Check out some of my work!</h3>

        <Row className="justify-content-center">
        <Card className="project-slide" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Plantify} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </Row>
      </Container>
    </section>
  )
}

export default Projects
