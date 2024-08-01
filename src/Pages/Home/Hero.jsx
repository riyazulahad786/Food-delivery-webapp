// import React from 'react'

import { Container, Row, Col } from "react-bootstrap";
import burgur from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";
import '../../styles/home.css'
function Hero() {
  return (
    <div className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={burgur} className="img-fluid" />
              <div className="price_badge">
                <div className="bade_content">
                  <h4 className="h4_xs">only</h4>
                  <h4 className="h4_cost">$ 8.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col className="" lg={5}>
            <div className="hero_heading text-center">
              <h1 className="text-white">New Burger</h1>
              <h3 className="text-white">With Onion</h3>
              <p className="text-white">
                Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat
              </p>
              <div>
                <Link className="btn  order_now">Order Now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
