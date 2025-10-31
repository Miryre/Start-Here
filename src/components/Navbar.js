import React, { useState } from "react";
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
          <div className='nav-brand'>
            <h2>
              StartHere
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/path--v1.png"
                alt="path--v1"
              />
            </h2>
          </div>

          {/* Everything else grouped on RIGHT */}
          <div className='nav-right'>
            {/* Navigation Links */}
            <div className="nav-links">
              {/* Resources Button - Opens Modal */}
              <button className="nav-link-btn" onClick={openModal}>
                Resources
              </button>

              {/* Regular Links */}
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
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

            {/* Modal Body - Resource Categories */}
            <div className="modal-body">
              <a href="#living-essentials" className="resource-card" onClick={closeModal}>
                <span className="resource-icon">🏠</span>
                <h3>Living Essentials</h3>
                <p>Food, housing, clothing & self-care</p>
              </a>

              <a href="#emergency" className="resource-card" onClick={closeModal}>
                <span className="resource-icon">🚨</span>
                <h3>Emergency Aid</h3>
                <p>Financial help & crisis support</p>
              </a>

              <a href="#academic" className="resource-card" onClick={closeModal}>
                <span className="resource-icon">📚</span>
                <h3>Academic Support</h3>
                <p>Tutoring, books & study resources</p>
              </a>

              <a href="#activities" className="resource-card" onClick={closeModal}>
                <span className="resource-icon">🎯</span>
                <h3>Activities</h3>
                <p>Free & low-cost campus events</p>
              </a>

              <a href="#career" className="resource-card" onClick={closeModal}>
                <span className="resource-icon">💼</span>
                <h3>Career & Internships</h3>
                <p>Job boards, resume help & more</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

  