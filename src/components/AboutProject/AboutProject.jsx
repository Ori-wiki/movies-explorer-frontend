import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className='about'>
      <SectionTitle id={'aboutProject'} text={'О проекте'} />
      <div className='about__container'>
        <div className='about__container-text'>
          <h3 className='about__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about__container-text'>
          <h3 className='about__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about__progress'>
        <div className='about__progress-container'>
          <p className='about__progress-time about__progress-time_green'>
            1 неделя
          </p>
          <span className='about__progress-text'>Back-end</span>
        </div>
        <div className='about__progress-container'>
          <p className='about__progress-time '>4 недели</p>
          <span className='about__progress-text'>Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
