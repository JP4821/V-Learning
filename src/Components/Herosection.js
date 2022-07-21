import { Carousel, Button } from 'react-bootstrap'
import React from 'react'
import Slide from '../Assets/slide.jpg'
import Slide1 from '../Assets/slide1.png'
import Slide2 from '../Assets/slide2.png'

const Herosection = () => {
    return (
        <section>
            <Carousel fade pause className="slider">
                <Carousel.Item>
                    <img src={Slide} alt="First Slider" className="img-fluid" />
                    <Carousel.Caption className="text-start translate-middle">
                        <h5 className="h5">HOW TO BECOME A</h5>
                        <h3>FULL STACK WEB DEVELOPER?</h3>
                        <p>Start your new career as a Full Stack Web Developer</p>
                        <Button variant="warning" className="px-5 px-sm-2">Register Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slide1} alt="Second Slider" className="img-fluid" />
                    <Carousel.Caption className="text-start translate-middle">
                        <h5>Get a job as a</h5>
                        <h3>Full Stack Web Developer - MERN Stack</h3>
                        <p>Our Full Stack Developer course will allow you to learn how to create full-stack <br/>web 
                        applications using the front-end and back-end JavaScript technologies.</p>
                        <Button variant="warning" className="px-5 px-sm-2">Register Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slide2} alt="Second Slider" className="img-fluid" />
                    <Carousel.Caption className="text-start translate-middle">
                        <h3>Become a Full Stack Developer with V Learning Program</h3>
                        <ul>
                            <li>Upskill in DSA & System Design with specialization in Full Stack Development</li>
                            <li>Build real-world projects by mastering React, MERN, JavaScript, etc.</li>
                            <li>Learn the essential Full Stack development concepts from scratch</li>
                        </ul>
                        <Button variant="warning" className="px-5 px-sm-2">Register Now</Button>
                        <Button variant="info" className="px-5 ms-2 px-sm-2">Download Syllabus</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Herosection
