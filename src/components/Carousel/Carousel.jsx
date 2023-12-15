// Carousel.jsx

import React, { useState } from 'react';
import './Carousel.styles.css';

const slidesData = [
  {
    heading: 'Electrical Control Panel 1',
    content: 'What specific quality control measures are implemented in the manufacturing?',
    imageSrc: '/images/image1.png',
  },
  {
    heading: 'Electrical Control Panel 2',
    content: 'What specific quality control measures are implemented in the manufacturing?',
    imageSrc: '/images/2nd.svg',
  },
  {
    heading: 'Electrical Control Panel 3',
    content: 'What specific quality control measures are implemented in the manufacturing?',
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
                  <span className="carousel-blue-headline">{slide.heading}</span>
                  {slide.content}
                </h1>
                <button className="carousel-button">Enquire Now</button>
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
