import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar'; // Make sure this is correctly imported
import Footer from '../footer/footer';
import testimonialsData from './testimonialsData'; // Import your testimonials data
import './TestimonialDetails.css'
const TestimonialDetails = () => {
  const { id } = useParams(); // Extract the testimonial id from URL parameters
  const testimonial = testimonialsData.find((testimonial) => testimonial.id === parseInt(id)); // Find the testimonial by ID

  // If no testimonial is found, display a message or handle error
  

  const { name, photo, experience } = testimonial; // Destructure the necessary fields

  return (
    <>
      <Navbar />
      <div className="testimonial-details-container">
        <h1 className="testimonial-title">{name}'s SemEx Experience</h1>
        <div className="testimonial-details-content">
          <img src={photo} alt={name} className="testimonial-photo-large" />
          <p className="testimonial-full-experience" dangerouslySetInnerHTML={{ __html: experience }}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialDetails;
