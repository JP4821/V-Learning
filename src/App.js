import './App.css';
import CourseCards from './Components/CourseCards';
import Coursespan from './Components/Coursespan';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Herosection from './Components/Herosection';

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Coursespan />
      <CourseCards />
      <Footer />
    </>
  );
}

export default App;
