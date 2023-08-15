import React from 'react';
import "./App.css";
import Header from './userviews/header/Header';
import Home from './userviews/home/Home';
import About from './userviews/about/About';
import Skills from './userviews/skills/Skills';
import Services from './userviews/services/Services';
import Qualification from './userviews/qualification/Qualification';
import Work from './userviews/Portfolio/Work';
import Testimonials from './userviews/testimonials/Testimonials';
import Contact from './userviews/contact/Contact';
import Footer from './userviews/footer/Footer';
import ScrollUp from './userviews/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Testimonials />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App