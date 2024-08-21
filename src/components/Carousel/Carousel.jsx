import React, { useState, useEffect } from 'react';
import './Carousel.css';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";

const images = [pic1, pic2];

const Carousel = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [interval]);

  return (
    <div className="carousel">
      <div className="carousel-text">About Us</div>
      <div className="carousel-body-text">The IITB Economics degree was launched in 2017 and has been one of the top sought after branches among JEE rankers and this year we finally launched our own department after being a sub-department of HSS for years.
 I am sure some of us had it too at some point🙂
Use these resources to your best and do contact us in case of any glitches or queries.

Disclaimer: The content of this website are opinions expressed by individual students, the information provided is for guidance purposes, use the information at your own risk.</div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
