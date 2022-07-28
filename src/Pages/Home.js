import React from 'react'
import BecomeFullStack from '../Components/BecomeFullStack';
import CourseCards from '../Components/CourseCards';
import Coursespan from '../Components/Coursespan';
import Footer from '../Components/Footer';
import Herosection from '../Components/Herosection';
import Header from '../Components/Header';
import KeySkills from '../Components/KeySkills';
import MobileBottom from '../Components/MobileBottom';

const Home = () => {
    return (
        <>
            <Header />
            <Herosection />
            <Coursespan />
            <BecomeFullStack />
            <CourseCards />
            <KeySkills />
            <Footer />
            <MobileBottom />
        </>
    )
}

export default Home
