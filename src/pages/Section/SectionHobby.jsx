import React, {useEffect} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import img from "../../assets/surf.png"
import  "../Section/section.css"
import AOS from "aos";
import "aos/dist/aos.css";


export  default function SectionHobby(props) {
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

                    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center px-1">
                        <div className="box-section">
                            <h4 data-aos="fade-left" data-aos-delay="20" >SOME WORD'S ABOUT HOBBY</h4>
                            <h2 data-aos="fade-left" data-aos-delay="80">"My passion is kitesurfing - chasing the wind and waves."</h2>
                            <p data-aos="fade-up" data-aos-delay="50">"My hobby is kitesurfing. It's just you, the wind, and the ocean. There's nothing like the feeling of harnessing the power of the wind to glide across the water—it's the ultimate escape and a total adrenaline rush."</p>
                            <button data-aos="fade-down" data-aos-delay="50" className="px-5 py-3  my-3 btn-box">Get started</button>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center" >
                        <Image data-aos="fade-right" data-aos-delay="20"   src={img} alt={"img"} className="img-fluid box-photo" />
                    </Col>
                </Row>
            </Container>

        </>
)}