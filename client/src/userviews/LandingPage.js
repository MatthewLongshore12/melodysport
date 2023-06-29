import React from 'react';
import '../stylesheets/landing.css'
import SocialMedia from './SocialMedia';
import Data from './Data';
// import ScrollDown from './ScrollDown';

function LandingPage() {

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <SocialMedia />

          <div className="home__img"></div>
          
          <Data />
        </div>

        {/* <ScrollDown /> */}
      </div>
    </section>
    
  )
}

export default LandingPage;
