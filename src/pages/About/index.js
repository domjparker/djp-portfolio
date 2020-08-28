import React from "react";
// import { Document, Outline, Page } from 'react-pdf';
// import resume from './public/assets/pdf/resumeDJP.pdf';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./style.css";




function About() {

  // const [pageNumber, setPageNumber] = useState(1);

  // function onItemClick({ pageNumber: itemPageNumber }) {
  //   setPageNumber(itemPageNumber);
  // }

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            {/* About Me Card */}
            <section className="top-section">
              <div className="card section card-body border-0">
                <Row>
                  <Col md={12}>
                    <h2 className="card-title">About Me</h2>
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    <img
                      className="img-fluid profileImage mr-4 mb-2 rounded"
                      src="Assets/Images/profilePicColor.png"
                      alt="Dominic Parker"
                    />
                  </Col>
                  <Col md={7}>
                    <p className="card-text">
                      I am a Full stack web developer with a background in education and a history of creating meaningful learning experiences for students from a variety of age-groups and backgrounds. I have strong interpersonal skills, with an emphasis on communication, conflict resolution, project management, and classroom instruction. My career to date has had a focus on humanitarian work and people development. Because of this, I strongly value transformational leadership, humility in learning, and collaboration. I aim to leverage my prior teaching insights with skills gained from recently completing a certificate in full stack web development from the University of Washington. Just as in my previous experience working with students of all ages, I am excited to use my expanding skills in web development to create user-oriented applications. I am knowledgeable in HTML5, CSS3, Javascript, React.js, Node.js, MySQL, and MongoDB.
                  </p>
                    <p>
                      Those I have worked with would describe me as approachable, genuinely interested, inquisitive, fun-loving, and wanting to do things in new and innovative ways.
                  </p>
                    <p>
                      Originally from New Zealand, I love getting outdoors,
                      spending time connecting with others, inventing, and improving
                      things.
                  </p>
                    <p>
                      "What is the most important thing in the world? It is people, it is people, it is people." -- Maori Proverb
                  </p>
                    <Link
                      href="https://github.com/domjparker"
                      target="_blank"
                      className="btn icons"
                    >
                      <i className="fa fa-github-square"></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/dominic-j-parker/"
                      target="_blank"
                      className="btn icons"
                    >
                      <i className="fa fa-linkedin-square"></i>
                    </Link>
                  </Col>
                </Row>
              </div>
            </section>

            <br /><br />
            {/* Resumé */}
            {/* <Document file={resume}>
              <Outline onItemClick={onItemClick} />
              <Page pageNumber={pageNumber || 1} /> */}
              {/* <iframe
                class="resume"
                src="../../public/Assets/pdfs/resume
                DJP.pdf"
                width="100%"
                height="800px"
              ></iframe> */}
            {/* </Document> */}
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default About;