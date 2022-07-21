import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const MobileBottom = () => {
    return (
        <>
            <Container fluid className="position-fixed position-sticky bottom-0 bg-light mbi-botm">
                <Row className="text-center mbl">
                    <Col className="py-1">
                        <h5 className="mb-1"><i className="fas fa-home"></i></h5>
                        <p className="mb-0">Home</p>
                    </Col>
                    <Col className="py-1">
                        <h5 className="mb-1"><i className="fas fa-search"></i></h5>
                        <p className="mb-0">Search</p>
                    </Col>
                    <Col className="py-1">
                        <h5 className="mb-1"><i className="fas fa-user-edit"></i></h5>
                        <p className="mb-0">CV Profile</p>
                    </Col>
                    <Col className="py-1">
                        <h5 className="mb-1"><i className="fas fa-book-reader"></i></h5>
                        <p className="mb-0">My Learning</p>
                    </Col>
                    <Col className="py-1">
                        <h5 className="mb-1"><i className="fas fa-user-circle"></i></h5>
                        <p className="mb-0">Account</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MobileBottom
