import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About StartHere</h1>
        <p>Your guide to affordable college living</p>
      </div>
      
      <div className="page-content">
        <section className="resource-category">
          <h2>Our Mission</h2>
          <p>StartHere was created to help students navigate the financial and practical challenges of college life. We believe every student deserves access to resources that make their education affordable and their experience enriching.</p>
        </section>

        <section className="resource-category">
          <h2>Why We Exist</h2>
          <p>Too many students struggle silently, unaware of the resources available to them. StartHere brings all these resources together in one place, making it easy to find help when you need it most.</p>
        </section>

        <section className="resource-category">
          <h2>Our Values</h2>
          <p>We're committed to providing free, accessible, and up-to-date information to all students, regardless of their background or circumstances.</p>
        </section>
      </div>
    </div>
  );
};

export default About;