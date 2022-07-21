import './App.css';
import BecomeFullStack from './Components/BecomeFullStack';
import CourseCards from './Components/CourseCards';
import Coursespan from './Components/Coursespan';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Herosection from './Components/Herosection';
import KeySkills from './Components/KeySkills';
import MobileBottom from './Components/MobileBottom';

function App() {
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
  );
}

export default App;
