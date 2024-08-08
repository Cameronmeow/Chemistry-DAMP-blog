import React from 'react';
import './sidebar.css';

const NavigationBox = ({ items }) => {
  return (
    <div className="navigation-box">
      <h2 className="navigation-title">Recently Uploaded</h2>
      <div className="navigation-content">
        {items.map((item, index) => (
          <div className="navigation-item" key={index}>
            <img src={item.image} alt={item.title} className="navigation-item-image" />
            <div className="navigation-item-details">
              <h3 className="navigation-item-title">{item.title}</h3>
              <p className="navigation-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBox;
