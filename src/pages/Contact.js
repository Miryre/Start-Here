import React from 'react';
import './Pages.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </div>
      
      <div className="page-content">
        <section className="resource-category">
          <h2>Get In Touch</h2>
          <p>We're currently setting up our official contact channels to better serve you. 
          In the meantime, the best way to stay connected is to subscribe to our updates!</p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Email:</strong> Our Contact Form Is Coming Soon.<br />
            <strong>Social Media:</strong> Email and social media channels will be announced shortly.
          </p>
        </section>

        <section className="resource-category">
          <h2>Submit a Resource</h2>
          <p>Know of a great resource that should be on StartHere? Let us know and we'll add it to help other students!</p>
        </section>

        <section className="resource-category">
          <h2>Partnership Opportunities</h2>
          <p>Interested in partnering with StartHere? We're always looking to collaborate with organizations that support student success.</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;