import React from 'react';
import { useLocation } from 'react-router-dom';

import './Header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ loggedIn = false }) {
  const location = useLocation();

  return loggedIn ? (
    <header
      className={`header header_theme_${
        location.pathname === '/' ? 'dark' : 'light'
      }`}
    >
      <Logo />
      <label className='header__label'>
        <input type='checkbox' className='header__checkbox' />
        <BurgerMenu />
      </label>
      <Navigation loggedIn={loggedIn} />
    </header>
  ) : (
    <header className='header header_theme_dark'>
      <Logo />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
