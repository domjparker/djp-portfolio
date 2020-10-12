import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProjectPromo from "../../components/ProjectPromo"
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
                    <h1 className="card-title">Portfolio</h1>
                  </Col>
                </Row>
                {/* first portfolio row  */}
                <Row>
                  {/* GuideMe promo  */}
                  <ProjectPromo name={"GuideMe"} url={"https://guidemedimma.herokuapp.com/"} imageSrc={"../Assets/Images/GuideMe.png"} githubHref={"https://github.com/domjparker/GuideMe-FE.git"} projectTagline={"GuideMe is a Full Stack application built using ReactJS and MongoDB. It helps explorers and guides connect so that more people can enjoy the outdoors."} />

                  {/* DrawScape promo  */}
                  <ProjectPromo name={"DrawScape"} url={"https://drawscape.herokuapp.com/"} imageSrc={"../Assets/Images/DrawScape.png"} githubHref={"https://github.com/domjparker/DrawScape.git"} projectTagline={"DrawScape is a Full Stack application built using Handlebars, Socket.io, and MySQL. It allows users to draw online in a fun, game environment, while messaging with friends and family."} />

                  {/* BrewFinder promo  */}
                  <ProjectPromo name={"BrewFinder"} url={"https://domjparker.github.io/brewfinder/"} imageSrc={"../Assets/Images/brewfinder.png"} githubHref={"https://github.com/domjparker/brewfinder.git"} projectTagline={"BrewFinder is an application built using Materialize and Open Street Map. It integrates a Brewery API and a mapping API so that you can find brewery establishments across the U.S."} />


                  {/* Question Quiz promo  */}
                  <ProjectPromo name={"Question Quiz"} url={"https://domjparker.github.io/question-quiz/"} imageSrc={"../Assets/Images/questionquiz.png"} githubHref={"https://github.com/domjparker/question-quiz.git"} projectTagline={"Question Quiz is a quiz game incorporating Javascript DOM manipulation to dynamically add elements and features to the browser."} />

                  {/* Weather Dashboard promo  */}
                  <ProjectPromo name={"Weather Dashboard"} url={"https://domjparker.github.io/weather-dashboard/"} imageSrc={"../Assets/Images/weatherdashboard.png"} githubHref={"https://github.com/domjparker/weather-dashboard.git"} projectTagline={"Weather Dashboard is an application using jQuery to append data retrieved from a weather API."} />

                  {/* NoteSaver promo  */}
                  <ProjectPromo name={"NoteSaver"} url={"https://note-saver-djp.herokuapp.com/"} imageSrc={"../Assets/Images/NoteSaver.png"} githubHref={"https://github.com/domjparker/noteSaver.git"} projectTagline={"NoteSaver is an application that allows a user to write, save, and delete notes so they can keep track of ToDos, thoughts, etc."} />
                  
                  {/* Employee Track App promo  */}
                  <ProjectPromo name={"Employee Track App"} url={"https://github.com/domjparker/Dev-Team-Generator-CLI-Application-.git"} imageSrc={"../Assets/Images/EmployeeTrackApp.png"} githubHref={"https://github.com/domjparker/Dev-Team-Generator-CLI-Application-.git"} projectTagline={"Dev Team Generator CLI is a Node.js application that asks the user what team members are part of their team, and then takes their response and creates an HTML file with a compiled view of this team."} />

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