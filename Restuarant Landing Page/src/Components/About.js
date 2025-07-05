import React from "react";
import AboutBackground from "../Assest/about-background.png";
import { Link } from 'react-router-dom';
import AboutUs from '../Assest/AboutUs.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-body">
      <div className="about-body-container">
        <div className="about-section-container">
          {/* Optional background image */}
          {/* <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
          </div> */}

          <div className="AboutUsImage">
            <img src={AboutUs} alt="About Us" />
          </div>

          <div className="about-section-text-container">
            <h2>About Us</h2>
            <div className="p01">
              Our company has been distributing food to customers all over the island for several decades. With our commitment to
            </div>
            <div className="p02">
              customer friendly service and unwavering dedication to quality, we have proudly expanded our operations across the entire country.
              This expansion has allowed us to build a prestigious reputation, becoming a trusted name in the food distribution industry nationwide.
            </div>

            {/* Optional: Add links back */}
            {/* <div className="about-links-container">
              <Link className='link' to="/mission">Mission</Link>
              <Link className='link' to="/Values">Values</Link>
              <Link className='link' to="/Members">Members</Link>   
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
