import React from 'react';
// import '../stylesheets/services.css';

function ServicesPage() {

  return (
    <div className="services-page">
      <h2>Services</h2>
      <div className="picture-section">
        <div className="picture">
          <img src="https://i.redd.it/duk74akvjea61.jpg" alt="Wedding Makeup" />
          <div className="overlay">
            <h3>Weddings</h3>
          </div>
        </div>
        <div className="picture">
          <img src="https://i.pinimg.com/originals/de/ea/39/deea394cd813bb1af90b55f7a7e5ca3a.jpg" alt="Bridal Party Makeup" />
          <div className="overlay">
            <h3>Bridal Parties</h3>
          </div>
        </div>
        <div className="picture">
          <img src="https://e1.pxfuel.com/desktop-wallpaper/601/967/desktop-wallpaper-17-vinland-saga-ideas-vinland-saga-manga.jpg" alt="Makeup for Other Events" />
          <div className="overlay">
            <h3>Other Events</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
