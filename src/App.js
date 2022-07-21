import './App.css';
import CourseCards from './Components/CourseCards';
import Coursespan from './Components/Coursespan';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Herosection from './Components/Herosection';
import MobileBottom from './Components/MobileBottom';

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Coursespan />
      <CourseCards />
      <Footer />
      <MobileBottom />
    </>
  );
}

export default App;
