// import React from 'react'

import { Col, Card, Button } from "react-bootstrap";

function Cards({ image, rating, title, price, paragraph }) {
  return (
      <Col sm={6} lg={4} xl={3} className="py-2">
        <Card className="overflow-hidden">
          <div className="overflow-hidden">
            <Card.Img variant="top" src={image} />
          </div>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div className="item_rating">{rating}</div>
              <div className="wishlist"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABXUlEQVR4nO2UTyuEURTGf5qFxMZGJEmxkGGFKFZCsuUjsPEF7NU0+QLMhK2yUmzFR7CxYqNBNjb+Z8ro1DN143i9875jxVOnbu/znOfc995zD/wjAXqAAlACysAVsAX0Bpo+YFtcWdpN5UZiFngAKk68AUvAstae5h6Yidp51fwAGAGagaz+yL6/K2xdBAalMe1hUKTbK1AIzD2sBAVs7aFaZMMjSyKHI45wVfEdRuVx6ZGvIu2Xk6JFHi8eeSFyIEWBrDzOPXJHZC5Fgbw8rK2/YEykdVJnAvMu4FFNYHfhYk9FjoBMDeamPVbubpSwDbiR0F5mHDToTVjOLdD+U8Ik8KyEtRgFctJazkSsLQHTQdvmtUtv5+vBGJmnRiwGM6f46U4ywbGYZoGEmArm0z7QBDQGzfAEzJES48CdDE8UFX0zri7o13ypjuVrYIg6owM4Bc70qH4FrYo/hA9B9W0lCbw6NQAAAABJRU5ErkJggg=="/></div>
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{paragraph}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
                <div>$ {price}</div>
                <div className="d-grid add_to_cart">
                    <button className="btn ">Add to Cart</button>
                </div>
            </div>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Col>
  
  );
}

export default Cards;
