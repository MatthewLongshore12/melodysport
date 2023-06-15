import './App.css';
import Navbar from './userviews/Navbar';
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./userviews/LandingPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
