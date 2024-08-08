// Navbar.jsx
import React, { useState } from 'react';
import './navbar.css'; // Importing CSS file for styling
import logo from "./logo_blue.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbarB">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img
            src={logo}
            style={{ height: "65px", padding: "0" }} // Adjusted height to match navbar height
            alt="logo"
          />
        </a>
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/blogs" className="navbar-link">Blogs</a>
          </li>
          <li className="navbar-item">
            <a href="/faq" className="navbar-link">FAQS</a>
          </li>
          <li className="navbar-item">
            <a href="/query" className="navbar-link">Queries</a>
          </li>
          <li className="navbar-item">
            <a href="/team" className="navbar-link">Team</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
