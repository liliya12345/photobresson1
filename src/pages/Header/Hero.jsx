import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './navbar.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Hero(props) {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-out-cubic",
        });
    }, []);

    const handleButtonClick = () => {
        window.location.href = "mailto:liliya.sayfutdinova@gritacademy.se";
    };

    return (
        <>
            <div className="hero nav-text">
                <Container className="d-flex justify-content-center align-items-center text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="hero-content">
                                <h4 data-aos="fade-right" data-aos-delay="50">HAY! THERE</h4>
                                <div className="box-section">
                                    <h1 data-aos="fade-left" data-aos-delay="50">I AM LILIYA</h1>
                                    <h2 data-aos="fade-up" data-aos-delay="50">A PROFESSIONAL DEVELOPER</h2>
                                    <button
                                        onClick={handleButtonClick}
                                        data-aos="fade-down"
                                        data-aos-delay="50"
                                        className="px-5 py-3 btn-hero"
                                    >
                                        Get in touch
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Hero;