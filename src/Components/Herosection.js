import { Carousel, Button } from 'react-bootstrap'
import React from 'react'
import Slide from '../Assets/slide.jpg'
import Slide1 from '../Assets/slide1.png'
import Slide2 from '../Assets/webde.jpg'
import Slide3 from '../Assets/ban.jpg'

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
                        <h3 className=''>RESPONSIVE WEBSITE DESIGN</h3>
                        <h5 className="">Desktop, mobile, tablet and beyond</h5>
                        <p className="fst-normal">To fit the size of the screen it’s viewed on any device <br /> Desktop, notebook, smartphone, tablet etc.</p>
                        {/* <Button variant="warning" className="px-5 px-sm-2 px-xs-2">Register Now</Button> */}
                        <Button variant="info" className="px-5 ms-2 px-sm-2 px-xs-2">Contact Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slide3} alt="Third Slider" className="img-fluid" />
                    <Carousel.Caption className="text-start translate-middle">
                        <h3 className='mb-0 text-dark'>WEBSITE DESIGN & DEVELOPEMENT</h3>
                        <h5 className="text-dark">Desktop, mobile, tablet and beyond</h5>
                        <p className="text-dark fst-normal">To fit the size of the screen it’s viewed on any device <br /> Desktop, notebook, smartphone, tablet etc.</p>
                        {/* <Button variant="warning" className="px-5 px-sm-2 px-xs-2">Register Now</Button> */}
                        <Button variant="info" className="px-5 ms-2 px-sm-2 px-xs-2">Download Syllabus</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Herosection
