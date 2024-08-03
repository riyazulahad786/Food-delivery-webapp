// import React from 'react'

import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="footer_section">
      <Container>
        <Row>
          <Col lg={3}>
               <div>
                 <h5>Location</h5>
                 <p>5505 Waterford District</p>
                 <p>Dr, Miami, FL 33126</p>
                 <p>United States</p>
               </div>
          </Col>
          <Col lg={3}>
               <div>
                 <h5>Working Hours</h5>
                 <p>Mon-Fri: 9:00AM - 10:00PM</p>
                 <p>Saturday: 10:00AM - 8:30PM</p>
                 <p>Sunday: 12:00PM - 5:00PM</p>
               </div>
          </Col>
       
          <Col lg={3}>
               <div>
                 <h5>Order Now</h5>
                 <p>Quaerat neque purus ipsum</p>
                  <ul className="list-unstyled calling">
                    <li>88-0989899</li>
                  </ul>
               </div>
          </Col>
          <Col lg={3}>
               <div>
                 <h5>Follow Us</h5>
                 <p>5505 Waterford District</p>
                 <ul className="list-unstyled gap-2 social_link d-flex ">
                    <li><Link>
                    <i className="bi bi-facebook"></i>
                    </Link></li>
                    <li><Link>
                    <i className="bi bi-whatsapp"></i>
                    </Link></li>
                    <li><Link>
                    <i className="bi bi-messenger"></i>
                    </Link></li>
                    <li><Link>
                    <i className="bi bi-envelope"></i>
                    </Link></li>
                    <li><Link>
                    <i className="bi bi-twitter"></i>
                    </Link></li>
                  </ul>
               </div>
          </Col>

        </Row>
        <Row className="copy_right">
          <Col>
               <div>
                  <ul className="list-unstyled d-flex justify-content-center right">
                    <li>
                      <Link className="link">© 2023 <span>CODE4EDUCATION</span>. All Rights Reserved</Link>
                    </li>
                    <li>
                      <Link className="link">About Us</Link>
                    </li>
                    <li>
                      <Link className="link">Terms Of Use</Link>
                    </li>
                    <li>
                      <Link className="link">Privacy Policy</Link>
                    </li>
                  </ul>
               </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer