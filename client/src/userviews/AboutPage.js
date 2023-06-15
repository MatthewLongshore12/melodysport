import React from 'react';
import '../stylesheets/about.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="profile-image">
          <img src="https://static.wikia.nocookie.net/pokemon/images/6/6e/Ash_Infernape.png/revision/latest?cb=20230311022518" alt="Profile" />
        </div>
        <div className="text-content">
          <h2>Hi, I'm [Your Name]</h2>
          <p>
            Welcome to my makeup portfolio! I'm a passionate makeup artist with
            a love for creating stunning looks that enhance natural beauty. With
            years of experience in the industry, I've developed a keen eye for
            detail and a strong understanding of different skin types and
            tones.
          </p>
          <p>
            My goal is to make every client feel confident and beautiful in
            their own skin. I believe that makeup is not just about enhancing
            features, but also about embracing individuality and expressing
            unique personalities.
          </p>
          <p>
            Throughout my career, I have had the pleasure of working with a
            diverse range of clients, including models, actors, and brides. I
            offer a wide range of services, from natural everyday makeup to
            glamorous evening looks and special effects makeup for events or
            film.
          </p>
          <p>
            Take a look at my portfolio to see some of my previous work. If you
            have any questions or would like to book a session, please don't
            hesitate to get in touch. I look forward to working with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
