import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ListGroup, ListGroupItem }  from 'react-bootstrap'
import Plantify from '../images/plantify_v2.png'
import TaxDriver from '../images/tax_driver_v2.JPEG'
import CrazyFish from '../images/crazy_fish_v1.PNG'

const Projects = () => {

  return(
    <section id="projects">
      <div className="project-headers">
        <h2 className="project-title">Projects</h2>
        <h3 className="project-caption">Check out some of my work!</h3>
      </div>

      <Container id="projects-container">

        <Row className="project-row">
          <Card className="project-slide" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Plantify} />
            <Card.Body>
              <Card.Title className="project-card-title">Plantify</Card.Title>
              <Card.Text className="project-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text className="project-tech">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body className="card-link">
              <Card.Link className="card-link-code" href="#">Code</Card.Link>
              <Card.Link className="card-link-blog" href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Row>

        <Row className="project-row">
          <Card className="project-slide" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={TaxDriver} />
            <Card.Body>
              <Card.Title className="project-card-title">Tax Driver</Card.Title>
              <Card.Text className="project-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text className="project-tech">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body className="card-link">
              <Card.Link className="card-link-code" href="#">Code</Card.Link>
              <Card.Link className="card-link-blog" href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Row>

        <Row className="project-row">
          <Card className="project-slide" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={CrazyFish} />
            <Card.Body>
              <Card.Title className="project-card-title">Crazy Fish</Card.Title>
              <Card.Text className="project-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text className="project-tech">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body className="card-link">
              <Card.Link className="card-link-code" href="#">Code</Card.Link>
              <Card.Link className="card-link-blog" href="#">Blog</Card.Link>
            </Card.Body>
          </Card>
        </Row>

      </Container>
    </section>
  )
}

export default Projects
