import React from 'react';
import { Col, Container, Row, Nav } from "react-bootstrap";

function Footer(props) {
    return (
        <footer style={{ backgroundColor: '#000', color: 'white', padding: '2rem 0' }}>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="d-flex justify-content-center align-items-center px-1 ">
                        <div className="box-section-footer text-center">
                            <h4>Get in touch</h4>
                            <Nav className="flex-raw">

                                <Nav.Link
                                    href="https://www.linkedin.com/in/liliya-sayfutdinova-a116941b2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white mb-2"
                                >
                                    LinkedIn
                                </Nav.Link>
                                <Nav.Link
                                    href="https://github.com/liliya12345"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white mb-2"
                                >
                                    GitHub
                                </Nav.Link>
                                <Nav.Link
                                    href="mailto:liliya.sayfutdinova@gritacademy.se"
                                    className="text-white"
                                >
                                    mail
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                </Row>
                {/* Добавление копирайта */}
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} I am Liliya. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;