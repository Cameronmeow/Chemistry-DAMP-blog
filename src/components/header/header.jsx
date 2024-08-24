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
        <h1 className="banner-title">About Us</h1>
        <p className="banner-subtitle">he IITB Economics degree was launched in 2017 and has been one of the top sought after branches among JEE rankers and this year we finally launched our own department after being a sub-department of HSS for years.
 I am sure some of us had it too at some point🙂
Use these resources to your best and do contact us in case of any glitches or queries.

Disclaimer: The content of this website are opinions expressed by individual students, the information provided is for guidance purposes, use the information at your own risk.</p>
      </div>
    </header>
  );
};

export default Header;
