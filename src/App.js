// App.js

import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import OurClients from './components/OurClients/OurClients';
import WeBelieve from './components/WeBelieve/WeBelieve';
import Achievements from './components/Achievements/Achievements';
import Help from './components/Help/Help';
import Calender from './components/Calender/Calender';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Carousel />
      </Element>
      <Element name="clients">
        <OurClients />
      </Element>
      <Element name="believe">
        <WeBelieve />
      </Element>
      <Element name="achievements">
        <Achievements />
      </Element>
      <Element name="help">
        <Help />
      </Element>
      <Element name="calender">
        <Calender />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
