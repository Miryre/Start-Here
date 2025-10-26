import React from 'react';
import './Hero.css';

const Hero = () => {
  // Get day of year (1-365)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Cycle through 92 images
  const imageNumber = (dayOfYear % 92) + 1;
  
  // Format: hero-day-01.jpg (with leading zero)
  const imageName = `hero-day-${imageNumber.toString().padStart(2, '0')}.jpg`;
  const imagePath = `/images/hero/${imageName}`;
  
  // Debug
  console.log('Image path:', imagePath);
  
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>StartHere</h1>
          <p>Your guide to affordable college living</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;