import React from 'react';
import './header.css'; // Import your CSS file for styling
import bg from "./bg3.jpg";

const Header = () => {
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
        <h1 className="banner-title">Chemistry DAMP Blogs</h1>
        <p className="banner-subtitle">- By Chemistry Family</p>
      </div>
    </header>
  );
};

export default Header;
