import React from 'react';
import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <section className='nav'>
      <Link smooth='true' to={'#aboutProject'} className='nav__link'>
        О проекте
      </Link>
      <Link smooth='true' to={'#techs'} className='nav__link'>
        Технологии
      </Link>
      <Link smooth='true' to={'#student'} className='nav__link'>
        Студент
      </Link>
    </section>
  );
}

export default NavTab;
