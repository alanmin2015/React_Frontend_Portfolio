import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/skill">Skill</Link></li>
          <li><Link to="/Education">Education</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  export default Header;
