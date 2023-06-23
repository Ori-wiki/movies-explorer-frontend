import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import avatar from '../../images/photo_2022-09-14_00-30-33.jpg';
import Icon from '../Icon/Icon';
import iconTelegramLink from '../../images/telegram.svg';
import iconGitHubLink from '../../images/github.svg';

function AboutMe() {
  return (
    <section className='student'>
      <SectionTitle id={'student'} text={'Студент'} />
      <article className='student__info'>
        <div className='student__info-container'>
          <h3 className='student__title'>Денис</h3>
          <p className='student__profession'>Фронтенд-разработчик, 22 года</p>
          <p className='student__bio'>
            Я родился и живу в г.Санкт-Петербург, учился в СПбГАСУ на
            специальности "Строительство". Я люблю читать, а ещё увлекаюсь
            бегом. Мой путь во фронтенд стартовал на первом курсе, когда только
            начинал изучать HTML. Мне сразу это понравилось. В итоге я решил
            поступить в Яндекс.Практикум и целенаправленно развиваться в
            профессии.
          </p>
          <ul className='student__list'>
            <li className='student__list-item'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://telegram.me/Muda_jo'
                className='student__link'
              >
                <span className='student__list-text'>Telegram</span>
                <Icon iconLink={iconTelegramLink} />
              </a>
            </li>
            <li className='student__list-item'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/Ori-wiki'
                className='student__link'
              >
                <span className='student__list-text'>Github</span>
                <Icon iconLink={iconGitHubLink} />
              </a>
            </li>
          </ul>
        </div>
        <img src={avatar} alt='фото студента' className='student__photo' />
      </article>
    </section>
  );
}

export default AboutMe;
