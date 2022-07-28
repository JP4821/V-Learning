import './App.css';
import Home from './Pages/Home';
import Login from './Accounts/Login'
import {BrowserRouter as BR, Routes, Route} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import WebDesign from './Pages/WebDesign';
import Courses from './Pages/Courses';
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import WebDevelop from './Pages/WebDevelop';


function App() {
  return (
      <section>
        <BR>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/web-design' element={<WebDesign />} />
                <Route path='/web-develop' element={<WebDevelop />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BR>
      </section>
  );
}

export default App;
