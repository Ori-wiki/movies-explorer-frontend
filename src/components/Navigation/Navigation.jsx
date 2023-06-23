import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ loggedIn }) {
  return !loggedIn ? (
    <nav className='header__nav'>
      <Link to='/sign-up' className={'header__link header__link_signup'}>
        Регистрация
      </Link>
      <Link to='/sign-in' className={'header__link header__link_signin'}>
        Войти
      </Link>
    </nav>
  ) : (
    <nav className='header__nav header__nav_enter'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? 'header__link_active header__link header__link_enter'
            : 'header__link header__link_enter'
        }
      >
        Главная
      </NavLink>
      <NavLink
        to='/movies'
        className={({ isActive }) =>
          isActive
            ? 'header__link_active header__link header__link_enter'
            : 'header__link header__link_enter'
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to='/saved-movies'
        className={({ isActive }) =>
          isActive
            ? 'header__link_active header__link header__link_enter'
            : 'header__link header__link_enter'
        }
      >
        Сохранённые фильмы
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'header__box header__link header__link_active header__link_enter'
            : 'header__box header__link header__link_enter'
        }
        to='/profile'
      >
        Аккаунт<span className='header__account-icon'></span>
      </NavLink>
    </nav>
  );
}

export default Navigation;
