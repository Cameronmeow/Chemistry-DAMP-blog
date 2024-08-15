import React, { useEffect, useRef } from 'react';
import './InfiniteScroll.css';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import Blog from '../blog/blog';
const InfiniteScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    // Function to handle the continuous scroll
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; // Reset the scroll position
      } else {
        scrollContainer.scrollLeft += 1; // Move to the next pixel
      }
    };

    const interval = setInterval(scroll, 1); // Adjust speed with this interval

    return () => clearInterval(interval);
  }, []);

  const items = Array.from({ length: 10 }, (_, i) => `Chemistry DAMP Blogs`);

  return (
    <div className="scroll-container" ref={scrollRef}>
      <div className="scroll-content">
        {items.map((item, index) => (
          <div className="scroll-item" key={index}>
            {item}
          </div>
        ))}
        {items.map((item, index) => (
          <div className="scroll-item" key={index + items.length}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
