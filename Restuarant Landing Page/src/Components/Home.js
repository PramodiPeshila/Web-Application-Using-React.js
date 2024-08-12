import React ,{useState,useEffect}from "react";
import BannerBackground from "../Assest/home-banner-background.png";
import BannerImage from "../Assest/home-banner-image.jpg";
import './Home.css'
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");
  const [userName, setUserName] = useState("");//
  const [dateTime, setDateTime] = useState(new Date());

        useEffect(() => {
            const timer = setInterval(() => {
            setDateTime(new Date());
            }, 1000);

            
            return () => clearInterval(timer);
        }, []);

            const getGreetingMessage = () => {
            const hours = dateTime.getHours();
            if (hours < 12) {
            return "Good Morning..!";
            } else if (hours < 18) {
            return "Good Afternoon..!";
            } else {
            return "Good Evening..!";
            }
        };

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  const handleInputChange = (event) => {
    const name = event.target.value;
    setUserName(name);
    setWelcomeMessage(`Welcome, ${name} !`);
  };

  return (
    <div >
      <div className="home-banner-container">
        < div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

        <div className="home-text-section">
          <div className="primary-heading">

            <h2>{getGreetingMessage()} </h2>
            <h3>{welcomeMessage}</h3>

            <input 
            type="text" 
            placeholder="Enter your name" 
            value={userName} 
            onChange={handleInputChange} 
            className="name-input"
            />
          </div>
          

          <br/><br/><br/>
          <h1>Your Favourite Food Delivered Hot & Fresh</h1> 
          
          <p className="primary-text">
            Hurry Up!
             <br/>Order from your nearest restuarant.   
          </p>
          
          <button className="secondary-button" onClick={handleButtonClick}>
            Order Now <FiArrowRight />
          </button>

          {showMessage && <p className="order-message">Select Menu</p>}

        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>

      </div>
    </div>


  );
};

export default Home;

