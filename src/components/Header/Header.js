import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
// import { Link, Route, Routes } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Логотип' className='header__logo' />
      <nav className='header__nav'>
        <button className='header__button'></button>
        <button className='header__button'></button>
        <div className='header__box'>
          <button className='header__button'></button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
