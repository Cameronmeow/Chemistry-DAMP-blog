import React from 'react';
import './blog.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const Blog = ({id, name, photo, description}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="cardB" onClick={handleClick} >
      <img src={photo} alt={name} className="cardB-photo" />
      <div className="cardB-content">
        <h2 className="cardB-name">{name}</h2>
        <p className="cardB-description">{description}</p>
      </div>
    </div>
  );
};

export default Blog;
