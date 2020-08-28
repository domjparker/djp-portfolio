import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";

import './style.css'



function NavBar() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container className="nav-container">
      <Navbar.Brand className="nav-brand" href="/">Dominic Parker</Navbar.Brand>
      <Navbar.Toggle className=".navbar-toggler custom-toggler" aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link className="link-text" href="/">About</Nav.Link>
          <Nav.Link className="link-text" href="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link className="link-text" href="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;