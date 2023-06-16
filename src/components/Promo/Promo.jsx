import React from 'react';
import logo from '../../images/logo.svg';
// import accaountIcon from '../../images/icon__COLOR_icon-main.svg';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './Promo.css';

// const endpoints = ['/movies', '/saved-movies', '/profile', '/'];

function Promo() {
  return (
    <div className='promo'>
      <h2 className='promo__title'>
        Учебный проект студента
        <br />
        факультета Веб-разработки
      </h2>
    </div>
  );
}

export default Promo;
