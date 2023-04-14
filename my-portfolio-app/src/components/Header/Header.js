import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';

function Header() {
  window.addEventListener('scroll', function() {
    var img = document.getElementById('logo');
    // Check if the user has scrolled down a certain distance (in this case, 100 pixels)
    if (window.scrollY > 10) {
      // Add the 'scroll' class to the image
      img.classList.add('logomove');
    } else {
      // Remove the 'scroll' class from the image
      img.classList.remove('logomove');
    }
  });
    return (
      <header>
         <img class="logo" id="logo" src={logo} alt="Logo" height="130" />
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/project">Project</NavLink>
        </li>
        <li>
          <NavLink to="/skill">Skill</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
      </ul>
    </nav>
      </header>
    );
    
  }
  export default Header;
