import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

  return(
    <section id="contact">
      <Container fluid="true">
        <Row>
          <Col xs={6} md={4}>
            <h4>Contact</h4>
          </Col>
          <Col xs={6} md={4}>
            <h4>Location</h4>
            <p>Denver, CO</p>
          </Col>
          <Col xs={6} md={4}>
            <h4>social media icons</h4>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer;
