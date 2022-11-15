import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = () => (
  <div className="Contact" id="Contact">
    <h4>Contact</h4>
    <ul>
      <li><a href='mailto:lukavasha03@gmail.com' target="blank">lukavasha03@gmail.com</a></li>
      <li><a href='https://github.com/Vashakmadze' target="blank">github</a></li>
      <li><a href='https://www.instagram.com/lukavasha/' target="blank">instagram</a></li>
    </ul>
    <p>Made by Luka Vashakmadze. Inspired by Justin Chi</p>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
