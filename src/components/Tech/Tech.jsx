import React from 'react';
import './Tech.css';

function Tech({ text, link }) {
  return (
    <li className='tech'>
      <a className='tech__link' href={link} rel='noreferrer' target='_blank'>
        <span className='tech__text'>{text}</span>
      </a>
    </li>
  );
}

export default Tech;
