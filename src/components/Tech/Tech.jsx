import React from 'react';
import './Tech.css';
import { Link } from 'react-router-dom';

function Tech({ text, link }) {
  return (
    <Link to={link} target='_blank' className='tech'>
      <span className='tech__text'>{text}</span>
    </Link>
  );
}

export default Tech;
