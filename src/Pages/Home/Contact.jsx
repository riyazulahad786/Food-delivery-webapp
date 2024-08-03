// import React from 'react'

import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Contact() {
  return (
    <div className="contact_section">
        <Container>
            <Row className="justify-content-center">
                <Col lg={8} className="text-center">
                    <h4>We Guarantee</h4>
                    <h2>30 Minutes Delivery!</h2>
                    <p>Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius luctus neque
              magna</p>
              <Link>
                 <button className="btn btn_red">Call: 999-888-7777
</button>
              </Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact