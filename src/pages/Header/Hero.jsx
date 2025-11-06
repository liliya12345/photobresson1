import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './navbar.css';
import img from "../../assets/moon.png"
import tower from "../../assets/tower.png"
import AOS from "aos";
import "aos/dist/aos.css";
import SectionAbout from "../Section/SectionAbout";
import About from "../Section/About";
import SectionHobby from "../Section/SectionHobby";
import { useSpring,animated } from '@react-spring/web'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'

const url = (name: string, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

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
    const parallax = useRef()
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
            <div style={{ width: '100%', height: '100%', background: '#253237' }}>
                <Parallax ref={parallax} pages={3}>
                    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                    <ParallaxLayer
                        offset={0}
                        speed={0}
                        factor={3}
                        style={{
                            backgroundImage: url('stars', true),
                            backgroundSize: 'cover',
                        }}
                    />

                    {/* Уменьшенная луна */}
                    <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                        <img
                            src={img}
                            style={{
                                width: '15%', // Уменьшили с 15% до 8%
                                marginLeft: '70%'
                            }}
                            alt="moon"
                        />
                    </ParallaxLayer>


                    <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="cloud" />
                        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="cloud" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="cloud" />
                        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="cloud" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="cloud" />
                        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="cloud" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="cloud" />
                        <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="cloud" />
                        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="cloud" />
                    </ParallaxLayer>

                    <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="cloud" />
                        <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="cloud" />
                    </ParallaxLayer>


                        <ParallaxLayer
                        offset={2.5}
                        speed={-0.4}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                        }}>
                            {/*<img src={tower} style={{ width: '20%' }} alt="tower" />*/}
                        <img src={url('earth')} style={{ width: '60%' }} alt="earth" />

                    </ParallaxLayer>


                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        onClick={() => parallax.current?.scrollTo(0)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <SectionAbout/>

                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={1}
                        speed={0.1}
                        onClick={() => parallax.current?.scrollTo(2)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <SectionHobby/>
                    </ParallaxLayer>


                    <ParallaxLayer
                        offset={2}
                        speed={-0}
                        style={{
                            display: 'flex',
                            alignItems: 'end',
                            paddingBottom: '20%',
                            justifyContent: 'center',
                        }}
                        onClick={() => parallax.current.scrollTo(2)}>
                        <img src={tower} style={{ width: '20%' }} />

                    </ParallaxLayer>


                </Parallax>
            </div>
        </>
    );
}

export default Hero;