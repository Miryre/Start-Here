import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // State to control modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal when clicking outside of it
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      closeModal();
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
              <button className="nav-link-btn" onClick={openModal}>
                Resources
              </button>

              {/* Regular Links */}
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

            {/* Auth Buttons */}
            <div className="nav-auth">
              <button className="btn-login">Log In</button>
              <button className="btn-signup">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Resources Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h2>Explore Resources</h2>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            {/* Modal Body - Preview Cards */}
            <div className="modal-body">
              <Link to="/living-essentials" className="preview-card" onClick={closeModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop" alt="Living Essentials" />
                </div>
                <div className="preview-content">
                  <h3>🏠 Living Essentials</h3>
                  <p>Find affordable food, housing, clothing & self-care resources to make college life more manageable.</p>
                </div>
              </Link>

              <Link to="/emergency" className="preview-card" onClick={closeModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop" alt="Emergency Aid" />
                </div>
                <div className="preview-content">
                  <h3>🚨 Emergency Aid</h3>
                  <p>Access financial help, crisis support, and emergency resources when you need them most.</p>
                </div>
              </Link>

              <Link to="/academic" className="preview-card" onClick={closeModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop" alt="Academic Support" />
                </div>
                <div className="preview-content">
                  <h3>📚 Academic Support</h3>
                  <p>Get tutoring, textbook assistance, and study resources to help you succeed academically.</p>
                </div>
              </Link>

              <Link to="/activities" className="preview-card" onClick={closeModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop" alt="Activities" />
                </div>
                <div className="preview-content">
                  <h3>🎯 Activities</h3>
                  <p>Discover free and low-cost campus events, clubs, and social activities to stay engaged.</p>
                </div>
              </Link>

              <Link to="/career" className="preview-card" onClick={closeModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop" alt="Career" />
                </div>
                <div className="preview-content">
                  <h3>💼 Career & Internships</h3>
                  <p>Explore job boards, resume help, interview prep, and internship opportunities.</p>
                </div>
              </Link>

              <Link to="/community" className="preview-card" onClick={closeModal}>
                <div className="preview-image">
                  <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop" alt="Community" />
                </div>
                <div className="preview-content">
                  <h3>💬 Community Forum</h3>
                  <p>Connect with fellow students, share experiences, ask questions, and build your support network.</p>
                </div>
              </Link>
            </div>

            {/* Modal Footer - Browse All Button */}
            <div className="modal-footer">
              <button className="btn-browse-all" onClick={closeModal}>
                Browse All Resources →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
  