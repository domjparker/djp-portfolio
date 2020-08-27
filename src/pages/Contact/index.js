import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import "./style.css";
import { Button } from "react-bootstrap";


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
                                            <Form.Group>
                                                <label for="exampleFormControlInput1">Name</label>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-sm input-mysize"
                                                    id="exampleFormControlInput1"
                                                    placeholder="John Smith"
                                                />
                                            </Form.Group>
                                            {/* email address input */}
                                            <Form.Group>
                                                <label for="exampleFormControlInput2"
                                                >Email address</label
                                                >
                                                <input
                                                    type="email"
                                                    className="form-control form-control-sm"
                                                    id="exampleFormControlInput2"
                                                    placeholder="name@example.com"
                                                />
                                            </Form.Group>
                                            {/* message input */}
                                            <Form.Group>
                                                <label for="exampleFormControlTextarea1">Message</label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows="7"
                                                ></textarea>
                                            </Form.Group>
                                            {/* submit button */}
                                            <Button
                                                className="btn btn-custom"
                                                type="submit"
                                                value="Submit">
                                                    Submit
                                            </Button>
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