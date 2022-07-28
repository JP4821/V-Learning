import React, { useState } from 'react'
import { Navbar, Container, Offcanvas, Nav, Button, NavDropdown, Row, Col } from 'react-bootstrap'
import Logo from '../Assets/vlogo2.png'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    
    return (
        <>
            <Navbar expand="lg" variant="light" className="bgColor"  fixed="top" sticky="top">
                <Container>
                    <LinkContainer to={'/V-Learning'}>
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='offCanvasNavbar' />
                    <Navbar.Offcanvas id="offCanvasNavbar" placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>V-Learning</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="">
                            <Nav className="ms-auto fw-semibold pt-lg-2">
                                <LinkContainer to={'/V-Learning'}>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <NavDropdown title="What We Do" className="drop" >
                                    <LinkContainer to={'/V-Learning/web-design'}>
                                        <NavDropdown.Item>Web Designing</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to={'/V-Learning/web-develop'}>
                                        <NavDropdown.Item>Web Developement</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                                <LinkContainer to={'/V-Learning/courses'}>
                                    <Nav.Link>Explore Courses</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={'/V-Learning/profile'}>
                                    <Nav.Link>CV Profile</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={'/V-Learning/contact'}>
                                    <Nav.Link>Contact Us</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Nav>
                                <LinkContainer to={'/V-Learning/login'}>
                                    <Nav.Link className="d-grid" href={'/login'}>
                                        <Button variant="warning"><i className='fas fa-sign-in-alt'></i> Sign In</Button>
                                    </Nav.Link>
                                </LinkContainer>  
                                <LinkContainer to={'/V-Learning/login'}>                    
                                    <Nav.Link className="d-grid">
                                        <Button variant="danger"><i className='fas fa-users'></i> Sign Up</Button>
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
