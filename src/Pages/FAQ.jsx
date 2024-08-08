import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-brands-svg-icons'
// import { faInstagram, faLocationCrosshairs } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile, faFaceSmileBeam, faLocation, faMessage, faQuestion, faSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileWink } from '@fortawesome/free-regular-svg-icons';

const faqData = [
  {
    icon: faFaceSmileWink,
    question: 'What is the Chemistry DAMP blog?',
    answer: 'The Chemistry DAMP blog is a platform where we share the latest updates, articles, and insights about chemistry-related topics.'
  },
  { 
    icon: faQuestion,
    question: 'How can I contribute to the blog?',
    answer: 'You can contribute to the blog by reaching out to us via the contact form. We welcome articles, research papers, and personal insights related to chemistry.'
  },
  {
    icon: faMessage,
    question: 'Where can I find more information?',
    answer: 'For more information, you can browse through our different blog posts or contact us directly through the provided contact link.'
  },
  {
    icon: faSmile,
    question: 'Where can I find more information?',
    answer: 'For more information, you can browse through our different blog posts or contact us directly through the provided contact link.'
  },
  {
    icon: faSmile,
    question: 'Where can I find more information?',
    answer: 'For more information, you can browse through our different blog posts or contact us directly through the provided contact link.'
  },
  { 
    icon: faLocation,
    question: 'Where can I find more information?',
    answer: 'For more information, you can browse through our different blog posts or contact us directly through the provided contact link.'
  }
  // Add more FAQs as needed
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <h3 className="faq-subtitle">
          These are the most commonly asked questions about Chemistry DAMP blog.
          <br />
          Can't find what you are looking for? Contact us <a href="/contact">here</a>.
        </h3>
        <div className="faq-buttons">
          <button onClick={() => window.location.href = '/blogs'}>Blogs</button>
          <button onClick={() => window.location.href = '/team'}>Team</button>
          <button onClick={() => window.location.href = '/'}>Home</button>
        </div>
        <div className="faq-questions">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item" onClick={() => handleToggle(index)}>
              <div className="faq-question">
                <FontAwesomeIcon icon={faq.icon} />
                {faq.question}
                <span className={`arrow ${activeIndex === index ? 'down' : 'right'}`}>&#x25B6;</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
