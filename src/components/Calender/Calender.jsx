import React from "react";
import "./Calender.styles.css";
import Clock from "./../Calender/images/clock.svg";

function Calender() {
  return (
    <div className="calender">
      <div className="calender__left">
        <h3 className="WeBelieve-heading">
          We are Improving Ourselves
          <br />
          <span className="WeBelieve-blue-hedline">Every</span> Second
        </h3>

        <h5 className="calender-subtitle">WHAT MATTERS TO US?</h5>
        <p>
          We are Improving ourselves #EVERY SECOND At AG Corporation we keenly
          look into every aspect that affects our Customer's satisfaction,
          Employee engagement, our Enthusiastic work culture, and Product
          Quality. <br />​ <br />
          We believe in continuous improvement of the organization and that's
          the reason we are leading market from last 12 + years
        </p>
      </div>
      <div className="calender__right">
        <img alt="clock" src={Clock} />
      </div>
    </div>
  );
}

export default Calender;
