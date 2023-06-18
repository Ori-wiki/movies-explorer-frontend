import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

import Logo from '../Logo/Logo';

function Header({ loggedIn = false }) {
  return !loggedIn ? (
    <header className='header header_logout'>
      <Logo />
      <nav className='header__nav'>
        <Link to='/sign-up' className={'header__link header__link_signup'}>
          Регистрация
        </Link>
        <Link to='/sign-in' className={'header__link header__link_signin'}>
          Войти
        </Link>
      </nav>
    </header>
  ) : (
    <header className='header'>
      <Link to='/'>
        <Logo />
      </Link>
      <nav className='header__nav'>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            isActive ? 'header__link_active header__link' : 'header__link'
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className={({ isActive }) =>
            isActive ? 'header__link_active header__link' : 'header__link'
          }
        >
          Сохранённые фильмы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'header__box header__link header__link_active  '
              : 'header__box header__link'
          }
          to='/profile'
        >
          Аккаунт<span className='header__account-icon'></span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
