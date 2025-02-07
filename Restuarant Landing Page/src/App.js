import React from 'react';
import "./App.css";
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Navbar from './Components/Navbar';
import Mission from './Components/Mission';
import Values from './Components/Values';
import Members from './Components/Members';
import { ThemeProvider ,useTheme} from './ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App ()  {
  const{darkMode} = useTheme();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    }
  });

  return (
    
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
    
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/About" element={<About />} ></Route>
        <Route path="/contact-us" element={<ContactUs />} ></Route>
        <Route path="/Mission" element={<Mission />} ></Route>
        <Route path="/Values" element={<Values />} ></Route>
        <Route path="/Members" element={<Members />} ></Route>
      </Routes>
     </Router>
    
    </MuiThemeProvider>
    
    
  );
};

const AppWithThemeProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithThemeProvider;