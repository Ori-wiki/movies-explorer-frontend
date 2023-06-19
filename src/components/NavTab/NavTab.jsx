import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <section className='nav'>
      <a smooth='true' href={'#aboutProject'} className='nav__link'>
        О проекте
      </a>
      <a smooth='true' href={'#techs'} className='nav__link'>
        Технологии
      </a>
      <a smooth='true' href={'#student'} className='nav__link'>
        Студент
      </a>
    </section>
  );
}

export default NavTab;
