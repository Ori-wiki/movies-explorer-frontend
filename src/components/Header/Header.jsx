import React from 'react';

import './Header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ loggedIn = false }) {
  return !loggedIn ? (
    <header className='header header_logout'>
      <Logo />
      <Navigation loggedIn={loggedIn} />
    </header>
  ) : (
    <header className='header'>
      <Logo />
      <label className='header__label'>
        <input type='checkbox' className='header__checkbox' />
        <BurgerMenu />
      </label>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
