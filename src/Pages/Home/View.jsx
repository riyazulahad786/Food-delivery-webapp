// import React from 'react'

import { Carousel, Container, Row } from "react-bootstrap"
import blog1 from '../../assets/blog/review-author-1.jpg'
import blog2 from '../../assets/blog/review-author-2.jpg'
import blog3 from '../../assets/blog/review-author-3.jpg'

import blog4 from '../../assets/blog/review-author-5.jpg'


function View() {
  return (
    <div className="blog_section">
        <Container>
            <Row>
            <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <div className="d-flex flex-column text-center">
                        <div className="blog_img">
                            <img src={blog1} className="img-fluid" alt="images"/>
                            
                        </div>
                       
                     <div className="py-2">
                     <p>Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque </p>
                        <div className="item_rating">
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                        </div>
                        <h5 className="py-2">BY AMELIE NEWLOVE</h5>
                     </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                    <div className="d-flex flex-column text-center">
                        <div className="blog_img">
                            <img src={blog2} className="img-fluid" alt="images"/>
                            
                        </div>
                       
                     <div className="">
                     <p>Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque </p>
                        <div className="item_rating py-2">
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                        </div>
                        <h5 className="py-2">BY AMELIE NEWLOVE</h5>
                     </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <div className="d-flex flex-column text-center">
                        <div className="blog_img">
                            <img src={blog3} className="img-fluid" alt="images"/>
                            
                        </div>
                       
                     <div className="">
                     <p>Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque </p>
                        <div className="item_rating py-2">
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                        </div>
                        <h5 className="py-2">BY AMELIE NEWLOVE</h5>
                     </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <div className="d-flex flex-column text-center">
                        <div className="blog_img">
                            <img src={blog4} className="img-fluid" alt="images"/>
                            
                        </div>
                       
                     <div className="">
                     <p>Etiam sapien sem at sagittis congue augue massa varius
                  sodales sapien undo tempus dolor egestas magna suscipit magna
                  tempus aliquet porta sodales augue suscipit luctus neque </p>
                        <div className="item_rating py-2">
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                             <i className="bi bi-star-fill"></i>
                        </div>
                        <h5 className="py-2">BY AMELIE NEWLOVE</h5>
                     </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            
    </Carousel>
            </Row>
        </Container>
    </div>
  )
}

export default View