import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form"
import "./style.css";
// import { Button } from "react-bootstrap";


function Contact() {

    // const [formObject, setFormObject] = useState({
    //     name: "",
    //     email: "",
    //     message: ""
    // })

    // const handleInputChange = (event) => {
    //     setFormObject({ ...formObject, [event.target.name]: event.target.value })
    // }

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formObject)
    //     // write code to send to nodemailer here
    //     setFormObject({
    //         name: "",
    //         email: "",
    //         message: ""
    //     })
    // }

    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col lg={3} md={2} sm={1}></Col>
                    <Col lg={6} md={8} sm={10}>
                        {/* contact card */}
                        <section>
                            <div className="card section card-body border-0">
                                <Row>
                                    <Col md={12}>
                                        <h1 className="card-title">Contact</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <h5>To get in touch, I can be reached at the following email:</h5>
                                        <br></br>
                                        {/* <h5>dominic.j.parker@gmail.com</h5> */}
                                        <a href="mailto:dominic.j.parker@gmail.com" target="_blank" rel="noopener noreferrer">dominic.j.parker@gmail.com</a>
                                        {/* form inputs */}
                                        {/* <Form onSubmit={handleFormSubmit}>
                                            name input
                                            <Form.Group>
                                                <label>Name</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control form-control-sm input-mysize"
                                                    id="exampleFormControlInput1"
                                                    placeholder="John Smith"
                                                    value={formObject.name}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            email address input
                                            <Form.Group>
                                                <label >Email address</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="form-control form-control-sm"
                                                    id="exampleFormControlInput2"
                                                    placeholder="name@example.com"
                                                    value={formObject.email}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                            {message input
                                            <Form.Group>
                                                <label>Message</label>
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="7"
                                                    value={formObject.message}
                                                    onChange={handleInputChange}
                                                ></textarea>
                                            </Form.Group> */}
                                            {/* submit button */}
                                            {/* <Button
                                                className="btn btn-custom"
                                                type="submit"
                                                value="Submit">
                                                Submit
                                            </Button>
                                        </Form> */}
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    </Col>
                    <Col lg={3} md={2} sm={1}></Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;