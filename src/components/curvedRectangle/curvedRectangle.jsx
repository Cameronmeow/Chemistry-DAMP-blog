import React from 'react';
import './curvedRectangle.css';

const CurvedCard = ({ image, title }) => {
  return (
    <div className="curved-card">
      <div className="curved-card-image-container">
        <img src={image} alt={title} className="curved-card-image" />
      </div>
      <h2 className="curved-card-title">{title}</h2>
    </div>
  );
};

export default CurvedCard;
