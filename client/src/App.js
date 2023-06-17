import './App.css';
import Navbar from './userviews/Navbar';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './userviews/LandingPage'
import AboutPage from './userviews/AboutPage'
import ServicesPage from './userviews/ServicesPage';
import ContactPage from './userviews/ContactPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
