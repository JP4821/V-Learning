import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import HTML5 from '../Assets/html.png'
import CSS3 from '../Assets/css.jpg'
import JS from '../Assets/js.jpg'
import REACT from '../Assets/react.png'
import NODE from '../Assets/node.png'
import MONGO from '../Assets/mongo.png'

const CourseCards = () => {
    return (
        <section>
            <Container className="py-3">
                <Row className="coursecards">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={HTML5} />
                            <Card.Body  className="pt-1 pb-0">
                                <Card.Title className="mb-0">HTML5</Card.Title>
                                <Card.Text className="mb-0 pb-0">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <h5 className=""><i className="fa fa-rupee"></i> 199.00</h5>
                                <Button variant="warning" size="sm">Buy Now</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={CSS3} />
                            <Card.Body  className="pt-1 pb-0">
                                <Card.Title className="mb-0">HTML5</Card.Title>
                                <Card.Text className="mb-0 pb-0">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <h5 className=""><i className="fa fa-rupee"></i> 199.00</h5>
                                <Button variant="warning" size="sm">Buy Now</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={JS} />
                            <Card.Body  className="pt-1 pb-0">
                                <Card.Title className="mb-0">HTML5</Card.Title>
                                <Card.Text className="mb-0 pb-0">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <h5 className=""><i className="fa fa-rupee"></i> 199.00</h5>
                                <Button variant="warning" size="sm">Buy Now</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CourseCards
