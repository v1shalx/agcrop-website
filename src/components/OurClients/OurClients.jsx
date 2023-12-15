import React from "react";
import logo1 from "../OurClients/clients/logo_1.png";

import logo2 from   "../OurClients/clients/logo_2.png";

import logo3 from "../OurClients/clients/logo_3.png";

import logo4 from "../OurClients/clients/logo_4.png";

import logo5 from "../OurClients/clients/logo_5.png";

import logo6 from "../OurClients/clients/logo_6.png";

import logo7 from "../OurClients/clients/logo_7.png";

import logo8 from "../OurClients/clients/logo_8.png";

import logo9 from "../OurClients/clients/logo_9.png";
import "./OurClients.styles.css"





function OurClients() {
  return (
    <div className="OurClients">
      <h1>Our Clients</h1>
      <p>We have been working with some Fortune clients</p>
      <div className="Clients">
        <img alt="AMANOR" src={logo1} />
        <img alt="VILAS JAVDEKAR" src={logo9} />
        <img alt="AVASARA ACADEMY" src={logo8} />
        <img alt="VARROC" src={logo7} />
        <img alt="MOTIWALA SQUARE" src={logo6} />
        <img alt="MOTHERSON" src={logo5} />
        <img alt="GERE" src={logo4} />
        <img alt="YASHADA" src={logo3} />
        <img alt="BELMAC" src={logo2} />
      </div>
    </div>
  );
}

export default OurClients;
