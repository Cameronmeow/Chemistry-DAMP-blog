import React, { useState, useEffect } from 'react';
import './Gallery.css';

import gal1 from "/assets/Gallery/1.webp";
import gal2 from "/assets/Gallery/2.webp";
import gal3 from "/assets/Gallery/3.webp";
import gal4 from "/assets/Gallery/4.webp";
import gal5 from "/assets/Gallery/5.webp";
import gal6 from "/assets/Gallery/6.webp";
import gal7 from "/assets/Gallery/7.webp";
import gal8 from "/assets/Gallery/8.webp";
import gal9 from "/assets/Gallery/9.webp";
import gal10 from "/assets/Gallery/10.webp";
import gal11 from "/assets/Gallery/11.webp";
import gal12 from "/assets/Gallery/12.webp";
import gal13 from "/assets/Gallery/13.webp";
import gal14 from "/assets/Gallery/14.webp";
import gal15 from "/assets/Gallery/15.webp";
import gal16 from "/assets/Gallery/16.webp";
import gal17 from "/assets/Gallery/17.webp";
import gal18 from "/assets/Gallery/18.webp";
import gal19 from "/assets/Gallery/19.webp";
import gal20 from "/assets/Gallery/20.webp";
import gal21 from "/assets/Gallery/21.webp";
import gal22 from "/assets/Gallery/22.webp";
import gal23 from "/assets/Gallery/23.webp";
import gal24 from "/assets/Gallery/24.webp";
import gal25 from "/assets/Gallery/25.webp";
import gal26 from "/assets/Gallery/26.webp";
import gal27 from "/assets/Gallery/27.webp";
import gal28 from "/assets/Gallery/28.webp";
import gal29 from "/assets/Gallery/29.webp";
import gal30 from "/assets/Gallery/30.webp";
import gal31 from "/assets/Gallery/31.webp";


import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const images = [gal1, gal2, ,gal22,gal23,gal24,gal25,gal26,gal27,gal28,gal29,gal30,gal31, gal3, gal4,gal20,gal21,gal22, gal5, gal6,gal7,gal8,gal9,gal10,gal11,gal12,gal13,gal14,gal15,gal16,gal17,gal18,gal19];

const Gallery = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [interval]);

  // Preload the next image for the carousel for smoother transitions
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = images[(currentIndex + 1) % images.length];
  }, [currentIndex]);
  return (
    <>
      <Navbar />
      <div className='gallery'>
      {/* Carousel Section */}
      <div className="carouselG">
        <div className="carouselG-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="carouselG-item" key={index}>
              <img src={image} alt={`Slide ${index}`} loading="lazy"/>
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
              <img src={image} alt={`Gallery ${index}`} className="gallery-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default Gallery;
