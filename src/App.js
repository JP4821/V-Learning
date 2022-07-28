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
                <Route path='/V-Learning' element={<Home />} />
                <Route path='/V-Learning/login' element={<Login />} />
                <Route path='/V-Learning/web-design' element={<WebDesign />} />
                <Route path='/V-Learning/web-develop' element={<WebDevelop />} />
                <Route path='/V-Learning/courses' element={<Courses />} />
                <Route path='/V-Learning/profile' element={<Profile />} />
                <Route path='/V-Learning/contact' element={<Contact />} />
            </Routes>
        </BR>
      </section>
  );
}

export default App;
