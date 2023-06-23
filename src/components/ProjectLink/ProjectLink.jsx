import React from 'react';
import './ProjectLink.css';

function ProjectLink({ link, text }) {
  return (
    <li className='portfolio__list-item'>
      <a
        className='portfolio__list-link'
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        {text}
        <span className='portfolio__list-icon'></span>
      </a>
    </li>
  );
}

export default ProjectLink;
