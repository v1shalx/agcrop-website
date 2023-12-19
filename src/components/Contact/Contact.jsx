// Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.styles.css";

function Contact() {
  const navigate = useNavigate();

  const handleEnquireClick = () => {
   
    navigate("/enquire");
  };

  return (
    <div className="contact">
      <h3>Let’s Get Started With Us</h3>
      <button className="contact-button" onClick={handleEnquireClick}>
        Enquire Now &rarr;
      </button>
    </div>
  );
}

export default Contact;
