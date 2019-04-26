import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

  return(
    <section id="contact">
      <Container fluid="true">
        <Row>
          <Col className="bt-contact">
            <h4>Contact</h4>
          </Col>
          <Col className="bt-location">
            <h4>Location</h4>
            <p>Denver, CO</p>
          </Col>
          <Col className="bt-social-links">
            <h4>social media icons</h4>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer;
