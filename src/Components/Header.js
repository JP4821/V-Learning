import React, { useState } from 'react'
import { Navbar, Container, Offcanvas, Nav, Button, NavDropdown, Dropdown, NavItem, NavLink } from 'react-bootstrap'
import Logo from '../Assets/vlogo2.png'

const Header = () => {
    
    return (
        <>
            <Navbar expand="lg" variant="light" className="bgColor"  fixed="top" sticky="top">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='offCanvasNavbar' />
                    <Navbar.Offcanvas id="offCanvasNavbar" placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>V-Learning</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="">
                            <Nav className="ms-auto fw-semibold pt-lg-2">
                                <Nav.Link href="#">Home</Nav.Link>
                                <NavDropdown title="What We Do" className="drop" >
                                    <NavDropdown.Item href="#">Web Designing</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Web Developement</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#1">Explore Courses</Nav.Link>
                                <Nav.Link href="#2">CV Profile</Nav.Link>
                                <Nav.Link href="#3">Contact Us</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className="d-grid">
                                    <Button variant="warning"><i className='fas fa-sign-in-alt'></i> Sign In</Button>
                                </Nav.Link>
                                <Nav.Link className="d-grid">
                                    <Button variant="danger"><i className='fas fa-users'></i> Sign Up</Button>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
