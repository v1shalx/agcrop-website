// Carousel.jsx

import React, { useState } from 'react';
import './Carousel.styles.css';

const slidesData = [
  {
    heading: (
      <span className="black-text">
        <span className="blue-text">Pumping Solutions for</span> building and industrial Segment
      </span>
    ),
    content: (
      <span className="black-text content-text">
        What are the key pumping requirements for the building and industrial sector?
      </span>
    ),
    imageSrc: '/images/image1.png',
  },
  {
    heading: (
      <span className="black-text">
        <span className="blue-text">Electrical Control Panel</span> The best Built-in quality and After-sales service
      </span>
    ),
    content: (
      <span className="black-text content-text">
        What specific quality control measures are implemented in the manufacturing?
      </span>
    ),
    imageSrc: '/images/2nd.svg',
  },
  {
    heading: (
      <span className="black-text">
        <span className="blue-text">Fire Fighting Systems</span> for commercial and industrial applications
      </span>
    ),
    content: (
      <span className="black-text content-text">
        What factors should be considered when designing a fire fighting system?
      </span>
    ),
    imageSrc: '/images/3rd.svg',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="custom-carousel">
      <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-slide-content">
              <div className="carousel-slide-left-box">
                <h1 className="carousel-heading">
                  {slide.heading}
                  <br />
                  {slide.content}
                  <div>
                    <button className="carousel-button">Enquire Now</button>
                  </div>
                </h1>
              </div>
              <div className="carousel-slide-right-box">
                <img className="carousel-img" src={slide.imageSrc} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
