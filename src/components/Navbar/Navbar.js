// Navbar.js
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <div className="menu">
        <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu}>
          Home
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} onClick={toggleMenu}>
          Services
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Contact
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>
          About
        </ScrollLink>
        <RouterLink to="/enquire" className="enquire-btn" onClick={toggleMenu}>
          Enquire Now →
        </RouterLink>
      </div>
      <div className="toggle-btn" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
