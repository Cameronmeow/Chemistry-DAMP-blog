/* eslint-disable no-unused-vars */
// Navbar.jsx
import React, { useState } from "react";
import "./navbar.css"; // Importing CSS file for styling
import logo from "./logo_blueblack.svg";
// import LoginSignUp from "../LoginSignUP/LoginSignupForm.jsx"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Login,setLogin] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function handleChange(){
    setLogin(!Login);
  }
  return (
    <>
    <nav className="navbarB">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img
            src={logo}
            style={{ height: "85px", padding: "0" }} // Adjusted height to match navbar height
            alt="logo"
          />
        </a>
        <div
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/courses" className="navbar-link">
              Course Reviews
            </a>
          </li>
          <li className="navbar-item">
            <a href="/gallery" className="navbar-link">
              Gallery
            </a>
          </li>
          <li className="navbar-item">
            <a href="/resources" className="navbar-link">
              Resources
            </a>
          </li>
          <li className="navbar-item">
            <a href="/misc" className="navbar-link">
              Blogs
            </a>
          </li>
          <li className="navbar-item">
            <a href="/tracks" className="navbar-link">
              Course Tracks
            </a>
          </li>
          <li className="navbar-item">
            <a href="/faq" className="navbar-link">
              FAQS
            </a>
          </li>
          <li className="navbar-item">
            <a href="/team" className="navbar-link">
              Team
            </a>
          </li>

          {/* <li className="navbar-item navButton">
            <a href="/team" className="navbar-link">Login</a>
          </li>
           */}
        </ul>
        {/* <div>
        <a href="/login"><button className="navButton btn" onClick={handleChange}>Login</button></a>
          <a href="/login"><button className="navButton-sign btn">Sign Up</button></a>
        </div> */}
      </div>
    </nav>

    {/* {Login && <LoginSignUp/>} */}
    </>
  );
};

export default Navbar;
