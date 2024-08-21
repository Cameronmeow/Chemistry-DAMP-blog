import React from 'react';
import './Resources.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const resources = [
  { id: 1, title: 'Semester 1 Resources', link: '/resources/semester1' },
  { id: 2, title: 'Semester 2 Resources', link: '/resources/semester2' },
  { id: 3, title: 'Semester 3 Resources', link: '/resources/semester3' },
  { id: 4, title: 'Internship Resources', link: '/resources/internships' },
  { id: 5, title: 'Projects', link: '/resources/projects' },
  { id: 6, title: 'Career Guidance', link: '/resources/careers' },
];

const Resources = () => {
  return (
    <>
    <Navbar/>
    <div className="resources-container">
      <h1 className="resources-title">Explore Resources</h1>
      <div className="resources-grid">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            className="resource-card"
          >
            <div className="resource-content">
              <h2 className="resource-title">{resource.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Resources;
