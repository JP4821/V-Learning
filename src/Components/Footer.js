import React from 'react'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container className="py-4 text-white">
                <Row>
                    <Col md={3}>
                        <h4>About Us</h4>
                        <p className="text-light text-opacity-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio enim culpa iure illum earum corrupti.</p>
                        <Button variant="outline-warning">Start Learning Now</Button>
                    </Col>
                    <Col md={3}>
                        <h4>Popular Courses</h4>
                        <Nav className="flex-column">
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Front-End Developer</Nav.Link>
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Back-End Developer</Nav.Link>
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Full-Stack Developer</Nav.Link>
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Database Management Systems</Nav.Link>
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Interview Questions</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={3}>
                        <h4>Quick Links</h4>
                        <Nav className="flex-column">
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Website Design</Nav.Link>
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Website Development</Nav.Link>
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Explore Courses</Nav.Link>
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">CV Profile</Nav.Link>
                            <Nav.Link href="#" className="py-0 foo-link text-light text-opacity-75">Contact Us</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={3}>
                        <h4>Follow us on</h4>
                        <Nav className="gap-2">
                            <Nav.Link className="text-secondary foo-link fs-5 border px-3 py-1 border-warning rounded-pill border-opacity-25"><i className='fab fa-facebook-square'></i></Nav.Link>
                            <Nav.Link className="text-secondary foo-link fs-5 border px-3 py-1 border-warning rounded-pill border-opacity-25"><i className='fab fa-twitter'></i></Nav.Link>
                            <Nav.Link className="text-secondary foo-link fs-5 border px-3 py-1 border-warning rounded-pill border-opacity-25"><i className='fab fa-linkedin-in'></i></Nav.Link>
                            <Nav.Link className="text-secondary foo-link fs-5 border px-3 py-1 border-warning rounded-pill border-opacity-25"><i className='fab fa-youtube'></i></Nav.Link>
                        </Nav>
                        <ul className="mt-3 px-2">
                            <li className="list-group-item py-1"><a href="#" className="text-white text-decoration-none text-opacity-50">Terms of Use</a></li>
                            <li className="list-group-item py-1"><a href="#" className="text-white text-decoration-none text-opacity-50">Privacy Policy</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
