import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Help.styles.css"; // Use the same stylesheet as Carousel.jsx
import Construction from "../Help/images/1.svg";
import Electrical from "../Help/images/2.svg";
import Services from "../Help/images/3.svg";
import Fire from "../Help/images/4.svg";

function Help() {
  const slides = [
    {
      heading: "BUILDING & CONSTRUCTION SOLUTIONS",
      content:
        "Water management | HYPN system | Fire fighting system",
      imageSrc: Construction,
      description:
        "Blending our 15 years of experience and the latest technology to the commercial and residential building's water management, mechanical and Electrical requirements. We are experienced in watering & dewatering for multiple stories, water pressure management, fire fighting & LT Panels",
    },
    {
      heading: "ELECTRICAL CONTROL PANELS",
      content:
        "LT-HT Panels | Starter panel | Distribution & DG Panel | APFC Panel | Feeder Panel | Fire fighting panel | MCC Panel",
      imageSrc: Electrical,
      description:
        "AG Corporation offers a wide array of solutions to meet the most challenging power distribution requirements. Using an integrated approach that includes understanding customer requirements, design, manufacture, and On–Site support.",
    },
    {
      heading: "ELECTRICAL SERVICES",
      content:
        "Electrical contracting | Control Panel Mfg. | Commissioning | PAN India service",
      imageSrc: Services,
      description:
        "Electrical contracting some of which are low voltage distribution, emergency power systems, interior lighting, lighting control systems etc. An electrical contracting is a business that performs specialized construction work related to the design, installation, and maintenance of electrical systemsure, and On–Site support.",
    } ,{
      heading: "FIRE-FIGHTING SYSTEMS",
      content:
        "high-quality end-to-end firefighting solutions",
      imageSrc: Fire,
      description:
        "We provide high-quality end-to-end firefighting solutions. We are the Licensed fire fighting contractor of the Maharashtra fire authority. When it comes to fire safety, there must be a high quality and assured end-to-end fire fighting solution & that's the reason why AG Corporation provides 100% verified and high-quality fire fighting control panels and the best fit for different HPs of requirements",
    }
    // add more slides as needed
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div className="custom-carousel help" {...handlers}>
      <h2 className="help-heading">
        How We Can
        <span className="help-blue-headline"> Help </span>You
      </h2>

      <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-slide-content">
              <div className="carousel-slide-left-box">
                <img className="carousel-img" src={slide.imageSrc} alt="" />
              </div>
              <div className="carousel-slide-right-box">
                <div>
                  <h1 className="carousel-heading">
                    <span className="carousel-blue-headline">{slide.heading}</span>
                    {slide.content}
                  </h1>
                  <button className="carousel-button">Read More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Help;