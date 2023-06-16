import React from 'react';
import logo from '../../images/logo.svg';

import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='Логотип' className='header__logo' />
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
