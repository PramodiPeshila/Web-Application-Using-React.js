import React from 'react';
import ManagerPhoto from '../Assest/ManagerPhoto.jpg';
import secretary from '../Assest/secretary.jpg';
import chefImage from '../Assest/chefImage.jpg';
import Customer from '../Assest/Customer.jpg';

function Members() {
  return (
    <div className="meal-section">
      <div className="new-meal-section-container">
        <h1>Meet Our Team</h1>
        <div className="meal-cards-container">

          <div className="meal-card member">
            <img src={ManagerPhoto} alt="Manager" />
            <h5>Mrs. K. Perera - Manager</h5>
            <p>
              Founder of the Restaurant P & A. A highly respected and trusted manager. Under her guidance, "P&A" has become prestigious not only in Sri Lanka but also globally.
            </p>
          </div>

          <div className="meal-card member">
            <img src={secretary} alt="Financial Secretary" />
            <h5>Mrs. Fernando - Financial Secretary</h5>
            <p>
              A trustworthy employee since the company’s beginning. Her background in Financial Management strengthens the company every day.
            </p>
          </div>

          <div className="meal-card member">
            <img src={Customer} alt="Customer Care Manager" />
            <h5>Mr. Arun - Customer Care Manager</h5>
            <p>
              Responsible for customer interactions, feedback collection, and managing delivery services. A key link between the company and its clients.
            </p>
          </div>

          <div className="meal-card member">
            <img src={chefImage} alt="Head Chef" />
            <h5>Mr. P. Jayawardhana - Head Chef</h5>
            <p>
              With years of experience, he leads the kitchen team. His culinary skills and leadership contribute significantly to the company’s success.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Members;
