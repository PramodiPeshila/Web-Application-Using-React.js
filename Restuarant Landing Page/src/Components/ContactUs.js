import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageIcon from '@mui/icons-material/Language'; // for website
import XIcon from '@mui/icons-material/X'; // use from custom SVG or skip if not available
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from "../Assest/logo.png"; // Replace this with your logo path
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-footer-wrapper">
      <div className="footer-left">
        <h2>Connect with Us</h2>
        <p><strong>Address:</strong> No. 36, Piliyandala, Colombo 10, Sri Lanka</p>
        <p><strong>Phone:</strong> +94 71 234 5678</p>
        <p><strong>Email:</strong> foodies7@gmail.com</p>

        <div className="social-icons">
          <FacebookIcon />
          <InstagramIcon />
          <XIcon /> {/* optional */}
          <YouTubeIcon />
          <LanguageIcon />
        </div>

        <p className="footer-copy">©2025 Foodies</p>
      </div>

      <div className="footer-right">
        <img src={Logo} alt="Restaurant Logo" className="footer-logo" />
      </div>
    </div>
  );
};

export default ContactUs;
