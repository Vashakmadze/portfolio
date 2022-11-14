import React from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';

const Navbar = () => (
  <header className="Navbar">
    <nav>
      <ul>
        <li><Link to='Projects' spy={true} smooth={true} offset={0} duration={100}>Projects</Link></li>
        <li><Link to='Contact'>Contact</Link></li>
      </ul>
    </nav>
    <div className='info-div'>
      <div className='name-div'>
        <h1 className='name'>&gt; Luka Vashakmadze</h1>
      </div>
      <p className='info-p'>Hello there, I am a Web / Mobile Developer, currently studying BAS Applied Computer Science at <span>Howest University of Applied Sciences.</span></p>
    </div>
  </header>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
