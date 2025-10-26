import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
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
          {/* Category Links */}
          <div className="nav-links">
            <a href="#living-essentials">Living Essentials</a>
            <a href="#emergency">Emergency Aid</a>
            <a href="#academic">Academic Support</a>
            <a href="#activities">Activities</a>
            <a href="#career">Career</a>
          </div>

          {/* Auth Buttons */}
          <div className="nav-auth">
            <button className="btn-login">Log In</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

  