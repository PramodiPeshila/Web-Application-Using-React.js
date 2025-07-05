import React, { useState } from "react";
import "../App.css";
import './ContactUs.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [ setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    
    
    <div className="contact-form-frame">
          <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          
          <div>
            <label>Name</label><br/>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <p>{formErrors.name}</p>}
          </div>
          <div>
          <label>Email</label><br/>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <p>{formErrors.email}</p>}
          </div>
          <div>
          <label>Message</label><br/>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            {formErrors.message && <p>{formErrors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
    
    </div>
  
  );
}

export default ContactForm;