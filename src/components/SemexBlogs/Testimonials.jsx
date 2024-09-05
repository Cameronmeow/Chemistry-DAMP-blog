
import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

import './testimonials.css';
import testimonialsData from './testimonialsData.js';
import { useNavigate } from 'react-router-dom';


function Testimonials() {


  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/semex/${id}`);
  };


  // State to keep track of the current review
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next review
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  // Function to go to the previous review
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const { id,name, photo, shortExp } = testimonialsData[currentIndex]; // Current testimonial

  return (
    <>
      <Navbar />
      <div className="testimonials-container">
        <h1 className="testimonials-title">SemEx Experiences</h1>
        <p className="testimonials-intro">
          At IIT Bombay, students are offered a remarkable opportunity to broaden their academic and cultural horizons through the SemEx program. 
          This program allows students to spend a semester abroad at one of IIT Bombay’s partner universities, experiencing education in a completely 
          new setting. Whether you’re looking to enhance your academic journey, immerse yourself in a different culture, or simply explore the world, 
          SemEx offers a wealth of benefits that can have a lasting impact on both your personal and professional life.
        </p>
        <h2 className="testimonials-subtitle">What is SemEx?</h2>
        <p className="testimonials-description">
        SemEx, short for Semester Exchange, is a program that allows IIT Bombay students to study abroad for one semester at universities that have signed a Memorandum of Understanding (MoU) with IIT Bombay, enabling a smooth transfer of credits and ensuring that the courses you take abroad contribute to your degree. The program offers a unique blend of academic rigour and cultural immersion, providing students with an invaluable global perspective.
        </p>
        <h2 className="testimonials-subtitle">Why Should You Consider SemEx?</h2>
        <p className="testimonials-description">
        Engaging in a Semester Exchange is more than just an academic endeavour; it’s a life-changing experience that can shape your future in countless ways. Here’s why you should consider it:
        <br></br>
        <ol>
          <li><b>International Exposure and Cultural Immersion</b>: Living in a different country allows you to immerse yourself in a new culture. You’ll experience traditions, festivals, and day-to-day life from a local perspective. This will not only broaden your understanding of the world but also help you develop empathy and intercultural communication skills, which are essential in any professional field.</li>
          <li><b>Educational diversity</b>: Studying at a foreign university exposes you to different teaching styles, curricula, and academic approaches. This diversity can enhance your critical thinking, problem-solving abilities, and adaptability. You’ll learn to view challenges from multiple perspectives, a highly valued skill in today’s globalized world. Different education systems often offer courses, teaching methodologies, and perspectives that are not available at your home institution. Engaging with these differences can enrich your academic experience, giving you a broader and more diverse knowledge base. You might discover new areas of interest or gain insights that complement your studies at IIT Bombay.</li>        
          <li><b>Forge New Friendships</b>: One of the most rewarding aspects of SemEx is the opportunity to build relationships with students from around the world. These friendships can last a lifetime and often lead to valuable international networks that could benefit your career. Additionally, interacting with peers from different backgrounds enhances your ability to work in diverse teams and environments.</li>
          <li><b>Travel Opportunities</b>: Studying abroad opens the door to exploring new cities, countries, and regions. You can take advantage of weekends and holidays to travel and experience the beauty and diversity of your host country and its neighbours. This travel not only satisfies your wanderlust but also deepens your understanding of different cultures and histories.</li>
        </ol>
        These are just some of the reasons why you should consider it. Your motivation could be something different and unique!

        </p>
        <h2 className="testimonials-subtitle">How to Prepare for SemEx?</h2>
        <p className="testimonials-description">
        <ol>
          <li><b>Decide when you want to go</b>: This is the first thing you will have to do as it will decide everythincg. The International Relations (IR) office regularly updates the list of partner universities with which IIT Bombay has an MoU. Start by exploring these universities, focusing on the programs they offer and how they align with your academic and personal interests.</li>
          <li><b>Course Mapping</b>: One of the most critical aspects of planning your SemEx is course mapping. First, check the courses you must complete in that semester in IIT. Then, research the partner university’s course offerings to find equivalent courses. It’s important to closely match the course descriptions. Prepare a detailed list of potential courses in the format prescribed by the IR office (link attached below)</li>
          <li><b>FacAd</b>: Once you’ve identified suitable courses, you will have to get in touch with your Faculty Advisor. They will be the ones who will approve your course mapping. Meet with them well before the deadline to discuss the courses you plan to take. They may suggest changes to your mapping as they will have a better understanding of the curriculum.</li>
          <li><b>HoD</b>: Once the mapping is finalised and approved by your FacAd, you will have to get it signed by the Head of the Department. This won't be a hassle as your FacAd will have made all the necessary corrections with you.</li>
          <li><b>Dean IR</b>: With your course selections approved by HoD, you will have to forward your application letter to Dean IR's office the office of Dean IR will put you in touch with the International office of the Host institute and provide you with the links for online application for your exchange program. Host universities require the physical forms, countersigned by the Dean IR, to be sent by post as well. You will be responsible for getting these forms signed and posting them to the Host University, as advised by the IR office.</li>
          <br></br>
          Now, you wait for the results to come in!
        </ol>
        </p>
        <h2 className="testimonials-subtitle">Conclusion</h2>
        <p className="testimonials-description">A Semester Exchange (SemEx) at IIT Bombay is an incredible opportunity that offers both academic and personal growth. By stepping out of your comfort zone and immersing yourself in a new environment, you’ll gain experiences and skills that will serve you well throughout your life. Whether it’s the friendships you form, the cultures you experience, or the academic knowledge you acquire, the impact of SemEx will stay with you long after you return.
        <br/>
        <b>Here are some links that will help you out:</b>
        <br/>
        <a href="https://www.ir.iitb.ac.in/">IR Office Home Page</a>
        <br/>
        <a href="https://drive.google.com/drive/folders/1C5OQLmrt1kDprmtCnNRKKjifxvq0HeFz">Application Form and Guidelines (General and University wise, as shared in August 2024)</a>
        <br/>
        <a href="https://www.ir.iitb.ac.in/en/all-mou-s">See the list of MoUs</a>
        <br/>
        <a href="https://www.ir.iitb.ac.in/sites/www.ir.iitb.ac.in/themes/intrelation/file/Declaration%20form.pdf">Declaration Form</a>
        <br/>
        <a href="https://docs.google.com/document/d/1R6pJttoYrSlCze0jOC-vZKbrLAWBfTDH/edit?usp=sharing&ouid=114934522900264404931&rtpof=true&sd=true" >Grade Conversion Template</a>
        </p>
        {/* Navigation Buttons */}
        <div className="testimonial-navigation">
          <button onClick={handlePrev} className="testimonial-nav-btn">
            &lt; {/* Left Arrow */}
          </button>

          {/* Current Review */}
          <div 
          className="testimonial-card"
          onClick={() => handleClick(id)} // Add onClick to navigate on click
          style={{ cursor: 'pointer' }} // Show cursor pointer to indicate clickable
          >
            <img src={photo} alt={name} className="testimonial-photo" />
            <h3 className="testimonial-name" >{name}</h3>
            
            
             <p className='testimonial-experience' >{shortExp}</p>
           
          </div>

          <button onClick={handleNext} className="testimonial-nav-btn">
            &gt; {/* Right Arrow */}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Testimonials;
