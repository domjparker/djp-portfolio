import React from "react";
import Col from "react-bootstrap/Col";
import './style.css'



function ProjectPromo(props) {
    return (
        <>
            <Col className="promoCol" lg={4} md={6} sm={12}>
                    <a href={props.url} rel="noopener noreferrer">
                      <img
                        src={props.imageSrc}
                        className="img-fluid rounded"
                        alt={props.name}
                      />
                      <a
                        href={props.githubHref}
                        rel="noopener noreferrer"
                      ><i className="fa fa-github-square icon"></i
                      ></a>
                      <a
                        href={props.url}
                        rel="noopener noreferrer"
                      ><i className="fa fa-binoculars icon"></i
                      ></a>
                    </a>
                    <a
                      type="button"
                      href={props.githubHref}
                      rel="noopener noreferrer"
                      className="captionButtons btn btn-sm btn-block mb-4"
                    >
                      {props.projectTagline}
                    </a>
                  </Col>
        </>
    );
}

export default ProjectPromo;