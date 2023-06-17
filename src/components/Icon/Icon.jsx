import React from 'react';
import './Icon.css';

function Icon({ iconLink }) {
  return (
    <span
      className='student__list-icon'
      style={{
        backgroundImage: 'url(' + iconLink + ')',
      }}
    ></span>
  );
}

export default Icon;

// style={{
//   backgroundImage: 'url(' + require(zxc) + ')',
// }}
// `'url${iconLink}'`;
