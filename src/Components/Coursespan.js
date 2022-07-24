import React from 'react'
import Student from '../Assets/stud.png'
import Mentors from '../Assets/webd.png'
import LifeTime from '../Assets/life.png'
import {Container, Row, Col} from 'react-bootstrap'

const Coursespan = () => {
    return (
        <section className='bg-light'>
            <Container className="py-4">
                <Row className="coursedet">
                    <Col md={4} className="mb-2">
                        <div className="d-flex align-items-center cours p-2 rounded-3">
                            <div className="flex-shrink-0">
                                <img src={Student} alt="Overall Students" />
                            </div>
                            <div className="flex-grow-1 ms-2 pt-3">
                                <h4 className="mb-0">10+ Online Courses</h4>
                                <p>Grow your knowledge and your training and tools.</p>
                            </div>
                        </div>
                    </Col>                    
                    <Col md={4} className="mb-2">
                        <div className="d-flex align-items-center life p-2 rounded-3">
                            <div className="flex-shrink-0">
                                <img src={LifeTime} alt="Overall Students" />
                            </div>
                            <div className="flex-grow-1 ms-2 pt-3">
                                <h4 className="mb-0">Lifetime Access</h4>
                                <p>Grow your knowledge and your training and tools.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="mb-2">
                        <div className="d-flex align-items-center teach p-2 rounded-3">
                            <div className="flex-shrink-0">
                                <img src={Mentors} alt="Overall Students" />
                            </div>
                            <div className="flex-grow-1 ms-2 pt-3">
                                <h4 className="mb-0">Web Design/Development</h4>
                                <p>The best web designs take planning, experience, talent and execution.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Coursespan
