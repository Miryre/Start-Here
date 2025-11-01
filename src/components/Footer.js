import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        
        {/* Left Section - Brand */}
        <div className='footer-section footer-brand'>
          <div className='footer-logo'>
            <h3>StartHere <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/path--v1.png"
                alt="path--v1"
              /></h3>
          </div>
          <p className='footer-tagline'>
            Your guide to affordable college living
          </p>
          <p className='footer-copyright'>
            © 2025 StartHere. Made with 💙 by a student for students.
          </p>
        </div>

        {/* Middle Section - Resources */}
        <div className='footer-section footer-links'>
          <h4>Resources</h4>
          <ul>
            <li><Link to='/living-essentials'>Living Essentials</Link></li>
            <li><Link to='/emergency'>Emergency Aid</Link></li>
            <li><Link to='/academic'>Academic Support</Link></li>
            <li><Link to='/activities'>Activities</Link></li>
            <li><Link to='/career'>Career & Internships</Link></li>
            <li><Link to='/community'>Community Forum</Link></li>
          </ul>
        </div>

        {/* Right Section - About & Legal */}
        <div className='footer-section footer-info'>
          <h4>Company</h4>
          <ul>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
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
