import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skills from '../Assets/skills.jpg'

const BecomeFullStack = () => {
    return (
        <section className="become-full">
            <Container>
                <Row>
                    <Col md={5} className="order-sm-1 order-md-0">
                        <img src={Skills} alt="Become a Full stack" />
                    </Col>
                    <Col md={7} className="pt-4 order-sm-0">
                        <h4>Skills required to become Full Stack Developer</h4>
                        <ul class="pt-2">
                            <p>
                                <i class="fas fa-laptop"></i>&nbsp; Front-end Development
                            </p>
                            <p>
                                <i class="fas fa-laptop-code"></i>&nbsp; Back-end Development
                            </p>
                            <p>
                                <i class="fas fa-database"></i>&nbsp; Database Handling
                            </p>
                            <p>
                                <i class="fas fa-server"></i>&nbsp; Web Servers and API Exposure
                            </p>
                            <p>
                                <i class="far fa-image"></i>&nbsp; Basic Designing
                            </p>
                            <p>
                                <i class="fab fa-github"></i>&nbsp; Version Control System
                            </p>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BecomeFullStack
