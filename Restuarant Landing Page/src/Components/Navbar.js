import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assest/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { ThemeContext } from '../ThemeContext';
import { FormControlLabel, Switch } from '@mui/material';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`navBar ${theme}`}>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h1>P&A</h1>
      </div>

      <div className="navbar-links-container">
        <Link to="/" className="nav-link">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/About" className="nav-link">
          <InfoIcon />
          <span>About</span>
        </Link>
        <Link to="/contact-us" className="nav-link">
          <PhoneRoundedIcon />
          <span>Contact Us</span>
        </Link>
        <h2 className='timer'>{dateTime.toLocaleTimeString()}</h2>
      </div>

      <div className="theme-toggle-container">
        <FormControlLabel
          control={<Switch checked={theme === 'dark'} onChange={toggleTheme} />}
          label="Switch Mode"
        />
      </div>
    </div>
  );
};

export default Navbar;
