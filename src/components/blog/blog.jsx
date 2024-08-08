import React from 'react';
import './blog.css'; // Import your CSS file for styling

const Blog = ({ name, photo, description }) => {
  return (
    <div className="cardB">
      <img src={photo} alt={name} className="cardB-photo" />
      <div className="cardB-content">
        <h2 className="cardB-name">{name}</h2>
        <p className="cardB-description">{description}</p>
      </div>
    </div>
  );
};

export default Blog;
