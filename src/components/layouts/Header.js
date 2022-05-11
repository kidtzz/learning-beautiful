import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import "../assets/css/Header.min.css";

const Header = () => {
    return (
        <div className="container header-inner">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/News">News</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;
