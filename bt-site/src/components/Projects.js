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
        <h3 className="project-caption">Check out some of my favorite applications I've made!</h3>
      </div>

      <Container id="projects-container">

        <Row className="project-row">
          <Card className="project-slide" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={Plantify} />
            <Card.Body>
              <Card.Title className="project-card-title">Plantify</Card.Title>
              <Card.Text className="project-text">
                An app that makes finding, creating and saving your favorite plant-based recipes easy as pie!
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text className="project-tech">
                Created with: Ruby on Rails API + React/Redux
              </Card.Text>
            </Card.Body>
            <Card.Body className="card-link">
              <Card.Link className="card-link-code" href="https://github.com/bthornton505/Plantify">
                Code
              </Card.Link>
              <Card.Link className="card-link-heroku" href="https://plantifyyourlife.herokuapp.com/">
                Heroku
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>

        <Row className="project-row">
          <Card className="project-slide" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={TaxDriver} />
            <Card.Body>
              <Card.Title className="project-card-title">Tax Driver</Card.Title>
              <Card.Text className="project-text">
                An app that will let Uber/Lyft drivers keep track of their expenses which will help them file their taxes each year.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text className="project-tech">
                Created with: Ruby on Rails + JavaScript/Jquery
              </Card.Text>
            </Card.Body>
            <Card.Body className="card-link">
              <Card.Link className="card-link-code" href="https://github.com/bthornton505/uber-lyft-expense-app">
                Code
              </Card.Link>
              <Card.Link className="card-link-blog" href="http://brendenthornton.com/i_thought_ajax_was_a_cleaning_product">
                Blog
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>

        <Row className="project-row">
          <Card className="project-slide" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={CrazyFish} />
            <Card.Body>
              <Card.Title className="project-card-title">Crazy Fish</Card.Title>
              <Card.Text className="project-text">
                An application that will help fishtank enthusiasts keep track of the fish they have in their tanks.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text className="project-tech">
                Created with: Ruby + Sinatra
              </Card.Text>
            </Card.Body>
            <Card.Body className="card-link">
              <Card.Link className="card-link-code" href="https://github.com/bthornton505/Fish-Management-System">
                Code
              </Card.Link>
              <Card.Link className="card-link-blog" href="http://brendenthornton.com/crazyfish_sinatra_app">
                Blog
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>

      </Container>
    </section>
  )
}

export default Projects
