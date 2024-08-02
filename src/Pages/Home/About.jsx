// import React from 'react'

import { Container,Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Delivery from '../../assets/about/delivery-bike.png'
import '../../styles/home.css'
function About() {
    // Mock Data Cards
const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    // Add more mock data objects as needed
  ];
  return (
    <>
        <div className="about_section ">
       <Container>
          <Row>
             <Col className="text-center" lg={{span:8,offset:2}}>
                  <h2>The burger tastes better when you eat it with your family</h2>
                  <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus</p>
                <Link to="/" className="btn  explore_now">
                    Explore Full Menu
                </Link>
             </Col>
          </Row>
       </Container>
    </div>
    <div className="about_wrapper">
        <Container>
            <Row className="justify-content-md-center">
             {mockData.map((items,i)=>(
              <Col lg={4} md={6} key={i}>
                  <div className="about_box text-center">
                       <div className="about_icon">
                           <img src={items.image} className="img-fluid" alt="icon"/>
                           <h4>{items.title}</h4>
                           <p>{items.paragraph}</p>
                       </div>
                       
                  </div>
              </Col>        
             ))}
            </Row>
        </Container>
    </div>
    </>
  )
}

export default About