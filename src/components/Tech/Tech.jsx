import React from 'react';
import './Tech.css';

function Tech({ text, link }) {
  return (
    <li className='tech'>
      <a className='tech__text' href={link} rel='noreferrer' target='_blank'>
        {text}
      </a>
    </li>
  );
}

export default Tech;
