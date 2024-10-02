import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import internData from './internData'; // Import data from internData.js
import './intern.css';
import { useNavigate } from 'react-router-dom';

function Intern() {
  const navigate = useNavigate();

  // Handle navigation based on the unique id of each intern
  const handleClick = (id) => {
    navigate(`/intern/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="intern-container">
        <h1 className="intern-title">Intern Blogs</h1>
        <div className="intern-grid">
          {internData.map((intern, index) => (
            <div
              key={index}
              className="intern-card"
              onClick={() => handleClick(intern.id)} // Navigate using id
              style={{ cursor: 'pointer' }}
            >
              <img src={intern.photo} alt={`${intern.name}`} className="intern-photo" />
              <h3 className="intern-name">{intern.name}</h3>
              <p className="intern-experience">{intern.experience}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Intern;
