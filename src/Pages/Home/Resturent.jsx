// import React from 'react'

import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import storeIos from '../../assets/shop/appstore.png'
import storeAnroid from '../../assets/shop/googleplay.png'
import eshop from '../../assets/shop/e-shop.png'
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../assets/brands/brand-11.png'
import brand2 from '../../assets/brands/brand-12.png'
import brand3 from '../../assets/brands/brand-13.png'
import brand4 from '../../assets/brands/brand-14.png'
import brand5 from '../../assets/brands/brand-15.png'
import brand6 from '../../assets/brands/brand-16.png'
import brand7 from '../../assets/brands/brand-17.png'
import brand8 from '../../assets/brands/brand-18.png'

function Resturent() {
  return (
    <div>
      <div className="shop_section">
      <Container >
            <Row>
                <Col lg={6} className="text-start">
                     <h4>Download mobile App and</h4>
                     <h2>save up to 20%</h2>
                     <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque
                     dolor primis libero tempus, blandit varius</p>
                     <Link>
                        <img src={storeIos} className="img-fluid store" alt="ios"/>
                     </Link>
                     <Link>
                        <img src={storeAnroid} className="img-fluid store" alt="ios"/>
                     </Link>
                </Col>
                <Col lg={6}>
                    <img src={eshop} className="img-fluid" alt="e-shop"/>
                </Col>
            </Row>
        </Container>
      </div>
        <div className="brand_section">
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="brand_img">
                            <img src={brand1} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand2} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand3} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand4} className="img-fluid" alt="images"/>
                        </div>
                        
                        
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <div className="d-flex justify-content-between align-items-center">
                       
                       
                        <div className="brand_img">
                            <img src={brand4} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand5} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand6} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand5} className="img-fluid" alt="images"/>
                        </div>
                       
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <div className="d-flex justify-content-between align-items-center">
                    
                        <div className="brand_img">
                            <img src={brand6} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand6} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand7} className="img-fluid" alt="images"/>
                        </div>
                        <div className="brand_img">
                            <img src={brand8} className="img-fluid" alt="images"/>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
        </div>
    </div>
  )
}

export default Resturent