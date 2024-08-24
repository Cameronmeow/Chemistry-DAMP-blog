import React, { useState, useEffect } from 'react';
import './Gallery.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic1, pic2, pic3, pic4, pic5, pic6, pic1, pic2, pic3, pic4, pic5, pic6, pic1, pic2, pic3, pic4, pic5, pic6];
const imageC = [pic1, pic2, pic3, pic4, pic5, pic6];

const Gallery = ({ interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [interval]);

  return (
    <>
      <Navbar />

      {/* carouselG Section */}
      <div className="carouselG">
        <div className="carouselG-inner">
          {imageC.map((image, index) => (
            <div
              className={`carouselG-item ${index === currentIndex ? 'active' : ''}`}
              key={index}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <div className="carouselG-indicators">
          {imageC.map((_, index) => (
            <span
              key={index}
              className={`carouselG-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <h1 className="gallery-title">Our Gallery</h1>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
