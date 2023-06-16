import React from 'react';
import './SectionTitle.css';

function SectionTitle({ id, text }) {
  return (
    <h2 id={id} className='section-title'>
      {text}
    </h2>
  );
}

export default SectionTitle;
