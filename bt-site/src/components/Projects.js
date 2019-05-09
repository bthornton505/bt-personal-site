import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Plantify from '../images/plantify_v2.png'
import TaxDriver from '../images/tax_driver_v2.JPEG'
import CrazyFish from '../images/crazy_fish_v1.PNG'

const Projects = () => {

  return(
    <section id="projects">
      <div className="project-headers">
        <p className="project-title">Projects</p>
        <h3 className="project-caption">Check out some of my work!</h3>
      </div>

      <Container id="projects-container">
        <CardDeck>

            <Card className="project-slide" style={{ width: '17rem' }}>
              <Card.Img variant="top" src={Plantify} />
              <Card.Body>
                <Card.Title className="project-card-title">Plantify</Card.Title>
                <Card.Text className="project-text">
                  An app that makes finding, creating and saving your favorite plant-based recipes easy as pie!
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text className="project-tech">
                  Created with: Ruby on Rails + React/Redux
                </Card.Text>
              </Card.Body>
              <Card.Footer >
                <Card.Link href="https://github.com/bthornton505/Plantify">
                  Code
                </Card.Link>
                <Card.Link href="https://plantifyyourlife.herokuapp.com/">
                  Heroku
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card className="project-slide" style={{ width: '17rem' }}>
              <Card.Img variant="top" src={TaxDriver} />
              <Card.Body>
                <Card.Title className="project-card-title">Tax Driver</Card.Title>
                <Card.Text className="project-text">
                  An app that will lets Uber/Lyft drivers keep track of their expenses.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text className="project-tech">
                  Created with: Ruby on Rails + JavaScript/Jquery
                </Card.Text>
              </Card.Body>
              <Card.Footer >
                <Card.Link href="https://github.com/bthornton505/uber-lyft-expense-app">
                  Code
                </Card.Link>
                <Card.Link href="http://brendenthornton.com/i_thought_ajax_was_a_cleaning_product">
                  Blog
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card className="project-slide" style={{ width: '17rem' }}>
              <Card.Img variant="top" src={CrazyFish} />
              <Card.Body>
                <Card.Title className="project-card-title">Crazy Fish</Card.Title>
                <Card.Text className="project-text">
                  An application that will help fishtank enthusiasts keep track of their fish collection.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text className="project-tech">
                  Created with: Ruby + Sinatra
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link  href="https://github.com/bthornton505/Fish-Management-System">
                  Code
                </Card.Link>
                <Card.Link  href="http://brendenthornton.com/crazyfish_sinatra_app">
                  Blog
                </Card.Link>
              </Card.Footer>
            </Card>

        </CardDeck>
      </Container>
    </section>
  )
}

export default Projects
