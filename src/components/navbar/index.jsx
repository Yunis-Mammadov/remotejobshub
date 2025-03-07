import React, { useState } from 'react';
import { IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import '../../styles/Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="parentNavbar">
        <div className="navbar">
          <div className="logo">
            <a href="/">RemoteJobHub</a>
          </div>

          <div className="parentLinks">
            <ul>
              <li><a href="/jobs">For Job Employers</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="registerBtn">
              <Button className="textBtn" variant="text">+ Post a job</Button>
              <Button className="buttons" variant="contained">Sign Up</Button>
              <Button className="buttons" variant="outlined">Login</Button>
            </div>
          </div>


          <IconButton
            className="menuButton"
            onClick={toggleMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>



          {/* Hamburger Menu (appears below logo on small screens) */}
          {isOpen && (
            <div className="mobileMenu">
              <ul>
                <li><a href="/jobs">For Job Employers</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about">Contact</a></li>
                <Button className="buttons" variant="contained">Sign Up</Button>
                <Button className="buttons" variant="outlined">Login</Button>
                <Button className="textBtn" variant="text">+ Post a job</Button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
