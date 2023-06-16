import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';

function Main() {
  return (
    <main className='main'>
      <Promo />
      <NavTab />
    </main>
  );
}

export default Main;
