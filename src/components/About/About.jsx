import React from 'react';
import "./About.styles.css";
import pose from "../../components/About/images/pose.svg";

const AboutSection = () => {
  return (
    <div className="About" id="about">
      <div className="About-left-side">
        <div className="centered">
          <img className="about-img-1" alt="About" src={pose} />
        </div>
      </div>
      <div className="About-right-side">
        <div className="centered">
          <h3 className="About-heading">About <span>Us</span></h3>
          <p className="About-para">
            AG Corporation is serving the market proudly for the last 15 years. We are one of the prominent manufacturers and suppliers of a wide range of Hydropneumatic control panels, Fire fighting systems, and Electric control panels. AG Corporation is CPRI approved and manufactured in compliance with the industry-set norms and regulations. We have well-equipped and have a large production and service capacity. We have been appreciated by many top organizations for the precise requirement of our customers in the most efficient manner
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
