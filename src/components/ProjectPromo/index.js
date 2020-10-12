import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import './style.css'



function ProjectPromo(props) {

    const [sizeBig, setSizeBig] = useState(false);

    const handleSizeChange = () => {
        if (sizeBig === false) {
            setSizeBig(true)
        } else {
            setSizeBig(false)
        }
    }

    return (
        <>
            <Col className="promoNotBig" lg={4} md={6} sm={12} style={{ display: sizeBig ? 'none' : 'block' }}>
                {/* <a href={props.url} rel="noopener noreferrer"> */}
                    <img
                        src={props.imageSrc}
                        onClick={handleSizeChange}
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
                {/* </a> */}
                <a
                    type="button"
                    href={props.githubHref}
                    rel="noopener noreferrer"
                    className="captionButtons btn btn-sm btn-block mb-4"
                >
                    {props.projectTagline}
                </a>
            </Col>
            <Col className="promoBig" lg={12} md={12} sm={12} style={{ display: sizeBig ? 'block' : 'none' }}>
                {/* <a href={props.url} rel="noopener noreferrer"> */}
                    <img
                        src={props.imageSrc}
                        onClick={handleSizeChange}
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
                {/* </a> */}
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