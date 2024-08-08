import React from 'react';
import './Announcements.css';

const Announcements = ({ announcements }) => {
  return (
    <div className="announcements-box">
      <h2 className="announcements-title">Announcements</h2>
      <div className="announcements-content">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-item">
            <h3 className="announcement-item-title">{announcement.title}</h3>
            <p className="announcement-item-date">{announcement.date}</p>
            <p className="announcement-item-description">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
