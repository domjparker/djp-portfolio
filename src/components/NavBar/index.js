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


{/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
    </nav> */}

    // <nav className="navbar navbar-expand-md navbar-custom">
    //   {/* <!-- container for both navbar-brand and navbar-nav --> */}
    //   <div className="container ml-auto">
    //     {/* <!-- navbar-brand --> */}
    //     <span className="navbar-brand mx-0">Dominic Parker</span>
    //     {/* <!-- navbar-nav --> */}
    //     <button
    //       className="navbar-toggler custom-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav ml-auto">
    //         <a className="nav-item nav-link active" href="index.html"
    //           >About<span className="sr-only">(current)</span></a
    //         >
    //         <a className="nav-item nav-link" href="portfolio.html">Portfolio</a>
    //         <a className="nav-item nav-link" href="contact.html">Contact</a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>