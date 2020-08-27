import React from "react";
// import { Container, Row, Col } from "../Grid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import './style.css'



function Footer() {
    return (
        <>
            <footer class="py-4 footer-custom">
                <Row>
                    <Col-md-12>
                        <Container>
                            <p className="m-0 text-center small">© Copyright</p>
                        </Container>
                    </Col-md-12>
                </Row>
            </footer>
        </>
    );
}

export default Footer;