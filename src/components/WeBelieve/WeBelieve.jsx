import React from "react";
import "./WeBelieve.styles.css";

import logo1 from "../WeBelieve/icon/1.png"
import logo2 from "../WeBelieve/icon/2.png"
import logo3 from "../WeBelieve/icon/3.png"




function WeBelieve() {
  return (
    <div className="WeBelieve">
      <h2 className="WeBelieve-heading">
        We Believe in
        <br />
        <span className="WeBelieve-blue-hedline"> What Our Customers Love</span>
      </h2>

      <div className="WeBelieve-cards">
        <div className="WeBelieve-card">
          <img className="WeBelieve-card-icon" src={logo1} />
          <h3>
            Expert's <span>Team</span>
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="WeBelieve-card" id="center-card">
          <img className="WeBelieve-card-icon" src={logo2} />
          <h3>
            Out Of The Box <span>Features</span>
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="WeBelieve-card">
          <img className="WeBelieve-card-icon" src={logo3} />
          <h3>
            <span>24*7</span> Support
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeBelieve;
