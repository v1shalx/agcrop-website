import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>
          Services
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Contact
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
          About
        </Link>
        <a href="#" className="enquire-btn">
          Enquire Now →
        </a>
      </div>
      <div className="toggle-btn" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
