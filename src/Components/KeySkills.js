import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import St from '../Assets/tools/st.svg'
import Projects from '../Assets/tools/projects.svg'
import Hands from '../Assets/tools/hands.svg'
import Db from '../Assets/tools/db.png'
import Nocost from '../Assets/tools/no_cost.svg'
import Proj from '../Assets/tools/proj.png'
import CtoSessions from '../Assets/tools/ctoSessions.svg'
import Personalized from '../Assets/tools/personalized.svg'

const KeySkills = () => {
    return (
        <section className="py-3">
            <Container>
                <Row>
                    <Col>
                        <h4 class="py-3">Key Highlights</h4>
                    </Col>
                </Row>
                <Row className="px-5">
                    <Col md={6}>
                        <p><img src={St} class="key-img" alt="" /> Designed for Students/ Working Professionals</p>
                        <p><img src={Projects} class="key-img" alt="" /> 10+ Projects</p>
                        <p><img src={Hands} class="key-img" alt="" /> Practical Hands-on Workshops</p>
                        <p><img src={Db} class="key-img" alt="" /> Weekly doubt clearing sessions</p>
                    </Col>
                    <Col md={6}>
                        <p><img src={Nocost} class="key-img" alt="" /> No Cost EMI Options available</p>
                        <p><img src={Proj} class="key-img" alt="" /> Build real-world applications like Amazon, Walmart etc</p>
                        <p><img src={CtoSessions} class="key-img" alt="" /> Available in English, Telugu</p>
                        <p><img src={Personalized} class="key-img" alt="" /> Personalized Feedback on Assignments.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default KeySkills
