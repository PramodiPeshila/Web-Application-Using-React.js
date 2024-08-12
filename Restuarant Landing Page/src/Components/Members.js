import React from 'react'
import ManagerPhoto from '../Assest/ManagerPhoto.jpg'
import secretary from '../Assest/secretary.jpg'
import chefImage from '../Assest/chefImage.jpg'
import Customer from '../Assest/Customer.jpg'

function Members() {
  return (
   
      < div className="Photos">
        <div className='member'>
          <img src={ManagerPhoto} alt="" />
          <h5> Mrs. K.Perera - Manager</h5>
          <p>Founder of the Resturant P & A.Highly respected and trusted Manager with his experience in the industry.
              Under her guidance "P&A" name has become prestigate not only in Sri Lanka,But also throughout the world</p>
        </div>

        <div className='member'> 
          <img src={secretary} alt="" />
          <h5>Mrs.Fernando - Financial Secretary</h5>
          <p>Mrs Fernando is a trusworthy Employee at the beginning of the company.She had study about Financial Mnagement and throughout her knowledge and experience
              the company becomes strong and competitable day by day
          </p>
        </div> 

        <div className='member'> 
          <img src={Customer} alt="" /> 
            <h5>Mr.Arun - Customer Care Manager</h5>
            <p>Mr Gunawardhana is the Person who has the responsibility of Working with Customers.He has to engage with Customers and collect their feedbacks,Suggestions about Products.And also he has the responsibility to manage the Delivery services.</p>
        </div>

        <div className='member'>
          <img src={chefImage} alt="" />
            <h5>Mr.P.Jayawardhana - Head Chef </h5>
            <p>Mr P.Jayawardhana has years of experience in the Cooking industry and all other Chefs are controlled under him.His ability also help to strong the company.</p>
        </div>
      </div>
    
  )
}

export default Members
