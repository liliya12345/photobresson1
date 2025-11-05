import React, {useEffect} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import img from "../../assets/me.png"
import  "../Section/section.css"
import AOS from "aos";
import "aos/dist/aos.css";


export  default function SectionAbout(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center p-3">
                    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center" >
                        <Image data-aos="fade-right" data-aos-delay="20"   src={img} alt={"img"} className="img-fluid box-photo" />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center px-1">
                        <div className="box-section">
                            <h4 data-aos="fade-left" data-aos-delay="20" >SOME WORD'S ABOUT ME</h4>
                            <h2 data-aos="fade-left" data-aos-delay="80">"I speak two languages fluently: the logical language of the system  and the emotional language of the user. My role as a Fullstack Developer is to be a translator and a storyteller"</h2>
                            <p data-aos="fade-up" data-aos-delay="50">A Java Fullstack Developer who believes that great software is built on a foundation of clean code and clear communication. I enjoy the entire process, from brainstorming the database schema to polishing the UI components.</p>
                            <button data-aos="fade-down" data-aos-delay="50" className="px-5 py-3  my-3 btn-box">Get started</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
)}