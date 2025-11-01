import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        
        {/* Left Section - Brand */}
        <div className='footer-section footer-brand'>
          <div className='footer-logo'>
            <h3>StartHere 🎓</h3>
          </div>
          <p className='footer-tagline'>
            Your guide to affordable college living
          </p>
          <p className='footer-copyright'>
            © 2025 StartHere. Made with 💙 for students.
          </p>
        </div>

        {/* Middle Section - Resources */}
        <div className='footer-section footer-links'>
          <h4>Resources</h4>
          <ul>
            <li><a href='#living-essentials'>Living Essentials</a></li>
            <li><a href='#emergency'>Emergency Aid</a></li>
            <li><a href='#academic'>Academic Support</a></li>
            <li><a href='#activities'>Activities</a></li>
            <li><a href='#career'>Career & Internships</a></li>
            <li><a href='#community'>Community Forum</a></li>
          </ul>
        </div>

        {/* Right Section - About & Legal */}
        <div className='footer-section footer-info'>
          <h4>Company</h4>
          <ul>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='#privacy'>Privacy Policy</a></li>
            <li><a href='#terms'>Terms of Service</a></li>
          </ul>
          
          {/* Social Media */}
          <div className='footer-social'>
            <h4>Connect</h4>
            <div className='social-links'>
              <a href='#instagram' aria-label='Instagram' title='Instagram'>
                📷
              </a>
              <a href='#twitter' aria-label='Twitter' title='Twitter'>
                🐦
              </a>
              <a href='#tiktok' aria-label='TikTok' title='TikTok'>
                🎵
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
