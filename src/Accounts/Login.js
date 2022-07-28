import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const Login = () => {
    return (
        <section className='bg-warning'>
            <Container>
                <Row className="d-flex justify-content-center align-items-center vh-100">
                    <Col md={5}>
                        <h1>Login Now</h1>
                        <Form>
                            <InputGroup className="mb-2">
                                <InputGroup.Text id="basic-addon1"><i class="fas fa-user-tie icon"></i></InputGroup.Text>
                                <Form.Control type='text' placeholder="Enter username" />
                            </InputGroup>
                            <InputGroup className="mb-2">
                                <InputGroup.Text id="basic-addon1"><i class="fas fa-lock icon"></i></InputGroup.Text>
                                <Form.Control type='password' placeholder="Enter password" />
                            </InputGroup>
                            <Form.Group className="my-2 d-grid" >
                                <Button variant="primary">Sign In</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login
