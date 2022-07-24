import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import St from '../Assets/wed1.png'
import Dev from '../Assets/dev.png'
import Html from '../Assets/html5.png'
import Css from '../Assets/css.png'
import Boot from '../Assets/bootsp.png'
import Js from '../Assets/js1.png'
import Reactjs from '../Assets/reactjs.png'
import Node from '../Assets/nd.png'
import Express from '../Assets/expressjs.png'
import Mongo from '../Assets/mong.png'
import Mysql from '../Assets/mysql.png'

const KeySkills = () => {
    return (
        <section className="py-3">
            <Container>
                <Row>
                    <Col>
                        <h4 class="py-3">WHAT WE DO</h4>
                    </Col>
                </Row>
                <Row className="px-0">
                    <Col md={4}>
                        <img src={St} class="img-fluid order-sm-1 order-md-0" alt="" />
                    </Col>
                    <Col md={8} className="pt-md-4 order-sm-0">
                        <h4>Website Design</h4>
                        <p>Our design process starts with learning about your company or organization. We learn about who you are and what your goals are to create a unique website experience for your target audience.</p>
                        <p>HTML, CSS, Bootstrap and JavaScript are the foundation of all our web design projects. It’s of utmost importance that every site we develop be well organized, using the latest HTML, CSS, Bootstrap and JavaScript standards. And also we develop <b>RecatJS</b> applications. All websites are built using responsive design techniques to make for a great mobile, tablet, and desktop experience.</p>
                        <p className="whatdo desin">
                            <span><img src={Html} alt="" /></span>
                            <span><img src={Css} alt="" /></span>
                            <span><img src={Boot} alt="" /></span>
                            <span><img src={Js} alt="" /></span>
                            <span><img src={Reactjs} alt="" /></span>
                        </p>
                    </Col>
                </Row>
                <Row className="px-0">
                    <Col md={8} className="pt-md-4 order-sm-0">
                        <h4>Website Development</h4>
                        <p>Our website developers provide expert web application development services to our clients. We offers a variety of website development services, from creating responsive web development solutions, to building custom e-commerce using the latest and proven web technologies. More and more consumers make decisions based on their online experience: the appearance, usability and accessibility of your website is more important than ever, especially in an increasingly competitive market.</p>
                        <p>Now a days No. of companies and websites on the web use React with Node Js for one function or the other. Easy to learn, smooth to implement,re-usability, multi-functional, scalable and adaptable by nature.</p>
                        <p className="whatdev">
                            <span className="pe-2"><img src={Node} alt="" /></span>
                            <span className="px-3"><img src={Express} alt="" /></span>
                            <span className="px-3"><img src={Mongo} alt="" /></span>
                            <span className="ps-2"><img src={Mysql} alt="" /></span>
                        </p>
                    </Col>
                    <Col md={4}>
                        <img src={Dev} class="img-fluid order-sm-1 order-md-0" alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default KeySkills
