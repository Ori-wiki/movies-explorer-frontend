import React from 'react';
import './BurgerMenu.css';

function BurgerMenu() {
  return (
    <div className='menu'>
      <span className='menu__line menu__line_position_top' />
      <span className='menu__line menu__line_position_center' />
      <span className='menu__line menu__line_position_button' />
    </div>
  );
}

export default BurgerMenu;
