import React from 'react';
import './Portfolio.css';
import ProjectLink from '../ProjectLink/ProjectLink';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portofolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <ProjectLink
          link={'https://github.com/Ori-wiki/how-to-learn'}
          text={'Статичный сайт'}
        />
        <ProjectLink
          link={'https://github.com/Ori-wiki/Russian-travel'}
          text={'Адаптивный сайт'}
        />
        <ProjectLink
          link={'https://github.com/Ori-wiki/react-mesto-api-full-gha'}
          text={'Одностраничное приложение'}
        />
      </ul>
    </section>
  );
}

export default Portfolio;
