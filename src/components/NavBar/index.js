import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Dominic Parker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
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