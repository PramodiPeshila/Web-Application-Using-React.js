import React, { useState } from "react";
import BannerBackground from "../Assest/home-banner-background.png";
import BannerImage from "../Assest/home-banner-image.jpg";
import './Home.css';
//import { FiArrowRight } from "react-icons/fi";

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
            {/* Order Now <FiArrowRight /> */}
            View Menu
          </button>

          {showMessage && <p className="order-message"></p>}
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
