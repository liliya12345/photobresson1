import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './navbar.css';
import logo from "../../assets/logo.png";

export default function Header(props) {
    return (
        <div className="position-relative">
            <Navbar expand="lg" className="nav nav-text text-white position-fixed w-100" fluid="true">
                {/* Логотип слева */}
                <Navbar.Brand href="#home" className="text-white ms-3">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: '40px', paddingLeft:'40px' }}
                    />
                </Navbar.Brand>

                {/* Кнопка toggle */}
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="me-3"
                    style={{
                        borderColor: "white",
                        backgroundColor: "transparent"
                    }}
                >
                    <span style={{ color: "white" }}>☰</span>
                </Navbar.Toggle>

                {/* Навигационные ссылки справа */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-3">
                    <Nav>
                        <Nav.Link className="text-white" href="#portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link className="text-white" href="#about">ABOUT</Nav.Link>
                        <Nav.Link className="text-white" href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}