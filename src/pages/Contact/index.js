import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import "./style.css";


function Contact() {
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
                                        <h2 className="card-title">Contact</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        {/* form inputs */}
                                        <Form>
                                            {/* name input */}
                                            <div className="form-group">
                                                <label for="exampleFormControlInput1">Name</label>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-sm input-mysize"
                                                    id="exampleFormControlInput1"
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                            {/* email address input */}
                                            <div className="form-group">
                                                <label for="exampleFormControlInput2"
                                                >Email address</label
                                                >
                                                <input
                                                    type="email"
                                                    className="form-control form-control-sm"
                                                    id="exampleFormControlInput2"
                                                    placeholder="name@example.com"
                                                />
                                            </div>
                                            {/* message input */}
                                            <div className="form-group">
                                                <label for="exampleFormControlTextarea1">Message</label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="7"
                                                ></textarea>
                                            </div>
                                            {/* submit button */}
                                            <input
                                                className="btn btn-custom"
                                                type="submit"
                                                value="Submit"
                                            />
                                        </Form>
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