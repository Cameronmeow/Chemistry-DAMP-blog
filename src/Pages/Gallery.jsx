import React, { useState, useEffect } from 'react';
import './Gallery.css';
import gal1 from '../assets/Gallery2/1.jpg';
import gal2 from '../assets/Gallery2/2.jpg';
import gal3 from '../assets/Gallery2/3.jpg';
import gal4 from '../assets/Gallery2/4.jpg';
import gal5 from '../assets/Gallery2/5.jpg';
import gal6 from '../assets/Gallery2/6.jpg';
import gal7 from '../assets/Gallery2/7.jpg';
import gal8 from '../assets/Gallery2/8.jpg';
import gal9 from '../assets/Gallery2/9.jpg';
import gal10 from '../assets/Gallery2/10.jpg';
import gal11 from '../assets/Gallery2/11.jpg';
import gal12 from '../assets/Gallery2/12.jpg';
import gal13 from '../assets/Gallery2/13.jpg';
import gal14 from '../assets/Gallery2/14.jpg';
import gal15 from '../assets/Gallery2/15.jpg';
import gal16 from '../assets/Gallery2/16.jpg';
import gal17 from '../assets/Gallery2/17.jpg';
import gal18 from '../assets/Gallery2/18.jpg';
import gal19 from '../assets/Gallery2/19.jpg';

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const images = [gal1, gal2, gal3, gal4, gal5, gal6,gal7,gal8,gal9,gal10,gal11,gal12,gal13,gal14,gal15,gal16,gal17,gal18,gal19];

const Gallery = ({ interval = 3000 }) => {
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

      {/* Carousel Section */}
      <div className="carouselG">
        <div className="carouselG-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="carouselG-item" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <div className="carouselG-indicators">
          {images.map((_, index) => (
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
