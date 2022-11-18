import "./Header.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
    <Container className="header" >
        <Navbar.Brand href="#home" className="fw-bold"><span className="bg-primary p-1 rounded-3 text-light">JOHN</span> DOE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Quisuis-je ?</Nav.Link>
              <Nav.Link href="#link">Expertises</Nav.Link>
              <Nav.Link href="#link">Portfolio</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
            
    </Container>
    </Navbar>
  );
};

export default Header;
