import './App.css';
import Navbar from './userviews/Navbar';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './userviews/LandingPage'
import AboutPage from './userviews/AboutPage'
import ServicesPage from './userviews/ServicesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
