import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import pic1 from "./pic1.jpg";
import eshu1 from "./eshu1.jpeg";
import phd from "./phd.jpg";
import './Opportunities.css';
import { useNavigate } from 'react-router-dom';

const opportunityData = [
  {
    name: 'PHD Opportunities',
    photo: phd, // Replace with actual image path
    experience: 'Is a PhD in Chemistry the Right Path for You?',
    link: '/opportunities/phd'
  },
  {
    name: 'From Curiosity to Creation: My Journey in Tech Entrepreneurship',
    photo: eshu1, // Replace with actual image path
    experience: 'Eshu Koli',
    link: '/opportunities/eshu'
  },
  {
    name: 'Alex Johnson',
    photo: pic1, // Replace with actual image path
    experience: 'This place has shaped me into a better person both academically and personally.',
    link: '/opportunities/alex-johnson'
  }
  // Add more opportunities as needed
];

function Opportunities() {
  const navigate = useNavigate();

  // handleClick now accepts a `link` parameter
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <>
      <Navbar />
      <div className="opportunity-container">
        <h1 className="opportunity-title">Opportunities</h1>
        <div className="opportunity-grid">
          {opportunityData.map((opportunity, index) => (
            <div
              key={index}
              className="opportunity-card"
              onClick={() => handleClick(opportunity.link)} // Corrected onClick usage
              style={{ cursor: 'pointer' }}
            >
              <img src={opportunity.photo} alt={`${opportunity.name}`} className="opportunity-photo" />
              <h3 className="opportunity-name">{opportunity.name}</h3>
              <p className="opportunity-experience">{opportunity.experience}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Opportunities;
