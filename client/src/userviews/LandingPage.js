import React from 'react';
import '../stylesheets/landing.css'

function LandingPage() {
  return (
    <div className="container">
      <section className="hero">
        <h2>Welcome to my Makeup Portfolio</h2>
        <p>Showcasing my creativity and skills in the world of makeup.</p>
      </section>
      <section className="gallery">
        <div className="image">
          <img src="https://assetsio.reedpopcdn.com/pokemon_go_groudon_thumbnail.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" alt="Example 1" />
        </div>
        <div className="image">
          <img src="https://assetsio.reedpopcdn.com/pokemon_go_kyogre_thumbnail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" alt="Example 2" />
        </div>
        <div className="image">
          <img src="https://assetsio.reedpopcdn.com/pokemon_go_rayquaza_thumbnail.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp" alt="Example 3" />
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Makeup Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
