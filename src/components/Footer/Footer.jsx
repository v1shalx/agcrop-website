/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../Footer/logo/logo.svg";
import "./Footer.styles.css";
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-div-1">
        <div className="footer-brand-logo">
          <img
            alt="AG"
            src={logo}
            width="50"
            height="45"
            className="d-inline-block align-top"
          />
          <h3>Corporation</h3>
        </div>
        <p>
          Copyright © 2023 Ajay Thopate. <br /> All rights reserved
        </p>
        <div className="footer-brand-social-icon">
          <a className="icon" href="#">
            <FaFacebook size={24} />
          </a>

          <a className="icon" href="#">
            <FaLinkedin size={24} />
          </a>

          <a className="icon" href="#">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
      <div className="footer-div-2">
        <div className="footer-section-title">
          <h5>Company</h5>
        </div>
        <p>About us</p>
        <p>Help center</p>
        <p>Contact us</p>
        <p>Terms of service</p>
        <p>Privacy policy</p>
      </div>
      <div className="footer-div-3">
        <div className="footer-section-title">
          <h5>Services</h5>
        </div>
        <p className="p1">Pumping Solutions</p>
        <p>Electrical Control Panel</p>
        <p>Fire Fighting Services</p>
        <p>Electrical Services</p>
        <p>After Sales Services</p>
      </div>
      <div className="footer-div-4">
        <div className="footer-section-title">
          <h5>Contact</h5>
        </div>
        <p className="p1">+91 9923208955</p>
        <p>sales@agcorporation.in</p>
        <p>
          Sai Mangal Apartment, Sector no: 04, plot no. 206, Lane no:01 Spine
          road, Moshi, Pune-412105, Maharashtra (India)
        </p>
      </div>
    </div>
  );
}

export default Footer;
