import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // State to control modals
  const [isResourcesModalOpen, setIsResourcesModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Resources Modal Functions
  const openResourcesModal = () => {
    setIsResourcesModalOpen(true);
  };

  const closeResourcesModal = () => {
    setIsResourcesModalOpen(false);
  };

  // Email Modal Functions
  const openEmailModal = () => {
    setIsEmailModalOpen(true);
    setSubmitted(false);
  };

  const closeEmailModal = () => {
    setIsEmailModalOpen(false);
    setEmail('');
    setSchool('');
    setSubmitted(false);
  };

  // Handle Email Signup - Formspree Integration
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xkgppagd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          school: school,
          source: 'StartHere Newsletter Signup'
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
        
        // Close modal after 2 seconds
        setTimeout(() => {
          closeEmailModal();
        }, 2000);
      } else {
        alert('Something went wrong. Please try again!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again!');
    }
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      closeResourcesModal();
      closeEmailModal();
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          {/* Logo */}
          <Link to="/" className='nav-brand'>
            <h2>
              StartHere
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/path--v1.png"
                alt="path--v1"
              />
            </h2>
          </Link>

          {/* Everything else grouped on RIGHT */}
          <div className='nav-right'>
            {/* Navigation Links */}
            <div className="nav-links">
              {/* Resources Button - Opens Modal */}
              <button className="nav-link-btn" onClick={openResourcesModal}>
                Resources
              </button>

              {/* Regular Links */}
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

            {/* Email Signup Button */}
            <div className="nav-auth">
              <button className="btn-signup" onClick={openEmailModal}>
                Get Updates 📧
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Resources Modal */}
      {isResourcesModalOpen && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h2>Explore Resources</h2>
              <button className="modal-close" onClick={closeResourcesModal}>
                ✕
              </button>
            </div>

            {/* Modal Body - Preview Cards */}
            <div className="modal-body">
              <Link to="/living-essentials" className="preview-card" onClick={closeResourcesModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop" alt="Living Essentials" />
                </div>
                <div className="preview-content">
                  <h3>🏠 Living Essentials</h3>
                  <p>Find affordable food, housing, clothing & self-care resources to make college life more manageable.</p>
                </div>
              </Link>

              <Link to="/emergency" className="preview-card" onClick={closeResourcesModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop" alt="Emergency Aid" />
                </div>
                <div className="preview-content">
                  <h3>🚨 Emergency Aid</h3>
                  <p>Access financial help, crisis support, and emergency resources when you need them most.</p>
                </div>
              </Link>

              <Link to="/academic" className="preview-card" onClick={closeResourcesModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop" alt="Academic Support" />
                </div>
                <div className="preview-content">
                  <h3>📚 Academic Support</h3>
                  <p>Get tutoring, textbook assistance, and study resources to help you succeed academically.</p>
                </div>
              </Link>

              <Link to="/activities" className="preview-card" onClick={closeResourcesModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop" alt="Activities" />
                </div>
                <div className="preview-content">
                  <h3>🎯 Activities</h3>
                  <p>Discover free and low-cost campus events, clubs, and social activities to stay engaged.</p>
                </div>
              </Link>

              <Link to="/career" className="preview-card" onClick={closeResourcesModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop" alt="Career" />
                </div>
                <div className="preview-content">
                  <h3>💼 Career & Internships</h3>
                  <p>Explore job boards, resume help, interview prep, and internship opportunities.</p>
                </div>
              </Link>

              <Link to="/community" className="preview-card" onClick={closeResourcesModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop" alt="Community" />
                </div>
                <div className="preview-content">
                  <h3>💬 Community Forum</h3>
                  <p>Connect with fellow students, share experiences, ask questions, and build your support network.</p>
                </div>
              </Link>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button className="btn-browse-all" onClick={closeResourcesModal}>
                Browse All Resources →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Signup Modal */}
      {isEmailModalOpen && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content email-modal">
            {/* Modal Header */}
            <div className="modal-header">
              <h2>Stay Updated 📧</h2>
              <button className="modal-close" onClick={closeEmailModal}>
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="email-modal-body">
              {!submitted ? (
                <>
                  <p className="email-modal-description">
                    Get notified when we add new resources, tips, and opportunities for students!
                  </p>
                  
                  <form onSubmit={handleEmailSubmit} className="email-form">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="school">School (Optional)</label>
                      <input
                        type="text"
                        id="school"
                        placeholder="Your university or college"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn-submit-email">
                      Subscribe 🎉
                    </button>
                  </form>

                  <p className="email-modal-note">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thanks for subscribing!</h3>
                  <p>We'll keep you updated on new resources and tips.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
  