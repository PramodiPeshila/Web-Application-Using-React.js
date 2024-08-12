
import React from 'react';
import restuarant from '../Assest/restuarant.jpg';
import './About.css'


const Mission = () => {
  return (
    <div className='Mission-Text'>
      
      <div className='Text'>
        <h2>Our Mission</h2>
        <p>Our mission is to delight our customers with an exceptional dining experience by offering a diverse menu of delicious,
           high-quality meals crafted with the freshest ingredients. We strive to create a welcoming atmosphere where every guest feels valued and cared for.
            Our commitment is to consistently provide outstanding service, ensuring that every visit leaves a lasting, positive impression..</p>
      </div>
      <div className="Image">
            <img src={restuarant} alt="" />
      </div>
    </div>
    
  );
};

export default Mission;