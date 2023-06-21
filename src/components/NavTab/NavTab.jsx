import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <section className='nav'>
      <a href={'#aboutProject'} className='nav__link'>
        О проекте
      </a>
      <a href={'#techs'} className='nav__link'>
        Технологии
      </a>
      <a href={'#student'} className='nav__link'>
        Студент
      </a>
    </section>
  );
}

export default NavTab;
