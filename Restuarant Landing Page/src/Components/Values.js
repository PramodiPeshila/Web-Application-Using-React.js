
import React from 'react';
import restuarant from '../Assest/restuarant.jpg';

const Values = () => {
  return (
    <div className='Values'>
      <h2>Our Values</h2>
       
        <li><strong>Integrity:</strong> We believe in being honest and transparent in all our dealings.</li>
        <li><strong>Innovation:</strong> We are committed to continuous improvement and embracing new ideas.</li>
        <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
        <li><strong>Excellence:</strong> We strive for excellence in every aspect of our business.</li>
        <li><strong>Teamwork:</strong> Collaboration and support are key to our success.</li>
      
        <div className="ImageValue">
    <img src={restuarant} alt="" />
</div>
      
    </div>
    
  );
};

export default Values;