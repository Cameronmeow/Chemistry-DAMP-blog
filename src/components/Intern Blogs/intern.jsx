import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import './intern.css';

const testimonialsData = [
  {
    name: 'John Doe',
    photo: pic1, // Replace with actual image path
    experience: 'My journey at the institute has been amazing. The faculty and peers have been incredibly supportive.'
  },
  {
    name: 'Jane Smith',
    photo: pic2, // Replace with actual image path
    experience: 'I’ve learned so much and made lifelong friends here. The opportunities provided were invaluable.'
  },
  {
    name: 'Alex Johnson',
    photo: pic3, // Replace with actual image path
    experience: 'This place has shaped me into a better person both academically and personally.'
  }
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <>
      <Navbar />
      <div className="testimonials-container">
        <h1 className="testimonials-title">Intern Experiences</h1>
        <p className="testimonial-experience">Coming soon!</p>
        {/* <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.photo} alt={`${testimonial.name}`} className="testimonial-photo" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-experience">{testimonial.experience}</p>
            </div>
          ))}
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Testimonials;
