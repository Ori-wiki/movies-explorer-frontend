import React from 'react';
import './BurgerMenu.css';

function BurgerMenu() {
  return (
    <ul className='menu'>
      <li className='menu__line menu__line_position_top' />
      <li className='menu__line menu__line_position_center' />
      <li className='menu__line menu__line_position_button' />
    </ul>
  );
}

export default BurgerMenu;
