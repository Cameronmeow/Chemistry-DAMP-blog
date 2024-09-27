import React from 'react';
import './header.css'; // Import your CSS file for styling
import bg from "./bg3.jpg";

const Header = (ref) => {
    const bannerStyle = {
        backgroundImage: `url(${bg})`, // Replace with your image path
        backgroundSize: 'cover',
        
        backgroundPosition: 'center',
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 0px 40px 0px',
      };
  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner-content">
        <h1 className="banner-title">About Us</h1>
        <p className="banner-subtitle">Welcome to the IITB Chemistry Department Portal!

As a dynamic and interdisciplinary field, Chemistry at IIT Bombay offers a world of opportunities. Whether you're new to the program or diving deeper into research, this portal is your go-to resource for academic materials, course reviews, and essential information.

Navigating the program can be challenging, but you're not alone—many of us have had the same questions. Use these resources to your advantage, and don't hesitate to reach out if you need help.

Welcome to the journey of discovery in Chemistry at IITB!</p>
      </div>
    </header>
  );
};

export default Header;
