import React, { useState } from "react";
import About from './About';
import Members from './Members';
import ContactForm from "./ContactForm";
import ContactUs from "./ContactUs";
import BannerBackground from "../Assest/home-banner-background.png";
import BannerImage from "../Assest/home-banner-image.jpg";
import breakfast from "../Assest/breakfast.jpg";
import lunch from "../Assest/lunch.jpg";
import dinner from "../Assest/dinner.jpg";

import './Home.css';



const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  
  const handleButtonClick = () => {
    setShowMessage(true);
  };

  return (
    <div>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

        <div className="home-text-section">
          <h1>Your Favourite Food Delivered Hot & Fresh</h1>
          <p className="primary-text">
            Delicious meals, fresh ingredients, and unforgettable flavors. Dine in, take out, or get it delivered hot & fresh!
          </p>
          <button className="secondary-button" onClick={handleButtonClick}>
            View Menu
          </button>
          {showMessage && <p className="order-message"></p>}
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      {/* New Section */}
      <div className="meal-section">
        <div className="meal-section-container">
          <h1>We’re always here for you</h1>
          <div className="meal-cards-container">
            <div className="meal-card">
              <img src={breakfast} alt="Breakfast Cravings" />
              <h3>Breakfast Cravings</h3>
              <p>
                <span role="img" aria-label="Light meal">🥗</span> Light meal
                <span role="img" aria-label="Fruit drink">🍹</span> Fruit drink
                <span role="img" aria-label="From 7am">⏰</span> From 7am
              </p>
            </div>
            <div className="meal-card">
              <img src={lunch} alt="Lunch Blast" />
              <h3>Lunch Blast</h3>
              <p>
                <span role="img" aria-label="Spicy meal">🌶</span> Spicy meal
                <span role="img" aria-label="Beverage">🍵</span> Beverage
                <span role="img" aria-label="From 1pm">⏰</span> From 1pm
              </p>
            </div>
            <div className="meal-card">
              <img src={dinner} alt="Dinner Madness" />
              <h3>Dinner Madness</h3>
              <p>
                <span role="img" aria-label="Light meal">🥗</span> Light meal
                <span role="img" aria-label="Beverage">🍷</span> Beverage
                <span role="img" aria-label="From 9pm">⏰</span> From 9pm
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About section always below meal cards */}
      <div id = "about" className="about-section-on-home">
        <About />
      </div>
      <div id="members" className="members-section-on-home">
        <Members />
      </div>
      <div id="contact"className="contact-form-section">
        <ContactForm />
      </div>
      <div className="contact-us-section">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
