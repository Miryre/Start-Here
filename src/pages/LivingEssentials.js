import React from 'react';
import './Pages.css';

const LivingEssentials = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>🏠 Living Essentials</h1>
        <p>Find affordable food, housing, clothing & self-care resources</p>
      </div>
      
      <div className="page-content">
        <section className="resource-category">
          <h2>🍽️ Food Resources</h2>
          <p>Content coming soon...</p>
        </section>

        <section className="resource-category">
          <h2>🏠 Housing Options</h2>
          <p>Content coming soon...</p>
        </section>

        <section className="resource-category">
          <h2>👕 Clothing</h2>
          <p>Content coming soon...</p>
        </section>

        <section className="resource-category">
          <h2>💆 Self-Care</h2>
          <p>Content coming soon...</p>
        </section>
      </div>
    </div>
  );
};

export default LivingEssentials;