// import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from '../../assets/logo/logo.png'
import '../../styles/header.css'
function Header() {
  return (
    <header>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home">
            <Link className="logo">
                <img src={logo} className="img-fluid"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop Now</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
