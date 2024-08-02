// import React from 'react'

import {Row, Col, Container } from "react-bootstrap"
import promotionImage from '../../assets/promotion/pro.png'
function Promotion() {
  return (
    <div className="promotion_section">
        <Container>
            <Row>
                <Col lg={6}>
                    <img src={promotionImage} className="img-fluid" alt="promotion image"/>
                </Col>
                <Col lg={6} className="px-5">
                <h1>Nothing brings people together like a good burger</h1>
                <p>
Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida</p>
                <ul>
                    <li><p>
Fringilla risus, luctus mauris orci auctor purus euismod
                    pretium purus pretium ligula rutrum tempor sapien</p></li>
                    <li><p>Quaerat sodales sapien euismod purus blandit</p></li>
                    <li><p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                    sodales sapien undo pretium a purus mauris</p></li>
                </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Promotion