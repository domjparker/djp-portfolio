import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom";
import "./style.css"


function Portfolio() {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            {/* Portfolio Card  */}
            <section>
              <div className="card section card-body border-0">
                {/* section title row  */}
                <Row>
                  <Col md={12}>
                    <h2 className="card-title">Portfolio</h2>
                  </Col>
                </Row>
                {/* first portfolio row  */}
                <Row>
                  {/* DrawScape promo  */}
                  <Col lg={4} md={6} sm={12}>
                    <Link href="https://drawscape.herokuapp.com/" target="_blank">
                      <img
                        src="../Assets/Images/DrawScape.png"
                        className="img-fluid rounded"
                        alt="Responsive image"
                      />
                      <Link
                        href="https://github.com/indyminhas/DrawScape.git"
                        target="_blank"
                      ><i className="fa fa-github-square"></i
                      ></Link>
                    </Link>
                    <Link
                      type="button"
                      href="https://github.com/indyminhas/DrawScape.git"
                      target="_blank"
                      className="captionButtons btn btn-sm btn-block mb-4"
                    >
                      Drawscape is an application that allows users to draw online
                      in a fun, game environment, while messaging with friends and
                      family.
                    </Link>
                  </Col>
                  {/* BrewFinder promo  */}
                  <Col lg={4} md={6} sm={12}>
                    <Link
                      href="https://domjparker.github.io/brewfinder/"
                      target="_blank"
                    >
                      <img
                        src="../Assets/Images/brewfinder.png"
                        className="img-fluid rounded"
                        alt="Responsive image"
                      />
                      <Link
                        href="https://github.com/domjparker/brewfinder.git"
                        target="_blank"
                      ><i className="fa fa-github-square"></i
                      ></Link>
                    </Link>
                    <Link
                      type="button"
                      href="https://github.com/domjparker/brewfinder.git"
                      target="_blank"
                      className="captionButtons btn btn-sm btn-block mb-4"
                    >
                      BrewFinder is an application that queries a Brewery API and
                      a mapping API so that you can find brewery establishments
                      across the U.S.
                  </Link>
                  </Col>
                  {/* Question Quiz promo  */}
                  <Col lg={4} md={6} sm={12}>
                    <Link
                      href="https://domjparker.github.io/question-quiz/"
                      target="_blank"
                    >
                      <img
                        src="../Assets/Images/questionquiz.png"
                        className="img-fluid rounded"
                        alt="Responsive image"
                      />
                      <Link
                        href="https://github.com/domjparker/question-quiz.git"
                        target="_blank"
                      ><i className="fa fa-github-square"></i
                      ></Link>
                    </Link>
                    <Link
                      type="button"
                      href="https://github.com/domjparker/question-quiz.git"
                      target="_blank"
                      className="captionButtons btn btn-sm btn-block mb-4"
                    >
                      Question Quiz is a quiz game incorporating Javascript DOM
                      manipulation to dynamically add elements and features to the
                      browser.
                  </Link>
                  </Col>
                  {/* Weather Dashboard promo  */}
                  <Col lg={4} md={6} sm={12}>
                    <Link
                      href="https://domjparker.github.io/weather-dashboard/"
                      target="_blank"
                    >
                      <img
                        src="../Assets/Images/weatherdashboard.png"
                        className="img-fluid rounded"
                        alt="Responsive image"
                      />
                      <Link
                        href="https://github.com/domjparker/weather-dashboard.git"
                        target="_blank"
                      ><i className="fa fa-github-square"></i
                      ></Link>
                    </Link>
                    <Link
                      type="button"
                      href="https://github.com/domjparker/weather-dashboard.git"
                      target="_blank"
                      className="captionButtons btn btn-sm btn-block mb-4"
                    >
                      Weather Dashboard is an application using jQuery to append
                      data retrieved from a weather API.
                  </Link>
                  </Col>
                
                  {/* NoteSaver promo  */}
                  <Col lg={4} md={6} sm={12}>
                    <Link
                      href="https://note-saver-djp.herokuapp.com/"
                      target="_blank"
                    >
                      <img
                        src="../Assets/Images/NoteSaver.png"
                        className="img-fluid rounded"
                        alt="Responsive image"
                      />
                      <Link
                        href="https://github.com/domjparker/noteSaver.git"
                        target="_blank"
                      ><i className="fa fa-github-square"></i
                      ></Link>
                    </Link>
                    <Link
                      type="button"
                      href="https://github.com/domjparker/noteSaver.git"
                      target="_blank"
                      className="captionButtons btn btn-sm btn-block mb-4"
                    >
                      NoteSaver is an application that allows a user to write,
                      save, and delete notes so they can keep track of ToDos,
                      thoughts, etc.
                  </Link>
                  </Col>
                  {/* Employee Track App promo  */}
                  <Col lg={4} md={6} sm={12}>
                    <Link
                      href="https://github.com/domjparker/Dev-Team-Generator-CLI-Application-.git"
                      target="_blank"
                    >
                      <img
                        src="../Assets/Images/EmployeeTrackApp.png"
                        className="img-fluid rounded"
                        alt="Responsive image"
                      />
                      <Link
                        href="https://github.com/domjparker/Dev-Team-Generator-CLI-Application-.git"
                        target="_blank"
                      ><i className="fa fa-github-square"></i
                      ></Link>
                    </Link>
                    <Link
                      type="button"
                      href="https://github.com/domjparker/Dev-Team-Generator-CLI-Application-.git"
                      target="_blank"
                      className="captionButtons btn btn-sm btn-block mb-4"
                    >
                      Dev Team Generator CLI is a Node.js application that asks
                      the user what team members are part of their team, and then
                      takes their response and creates an HTML file with a
                      compiled view of this team.
                  </Link>
                  </Col>
                </Row>
              </div>
            </section>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;