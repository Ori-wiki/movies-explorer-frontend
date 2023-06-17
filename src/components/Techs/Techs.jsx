import React from 'react';
import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Tech from '../Tech/Tech';

function Techs() {
  const techsLinks = {
    html: 'https://www.w3.org/html/',
    css: 'https://www.w3.org/Style/CSS/Overview.en.html',
    js: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
    git: 'https://git-scm.com/',
    react: 'https://react.dev/',
    express: 'https://expressjs.com/ru/',
    mongo: 'https://www.mongodb.com/',
  };

  return (
    <section className='techs'>
      <SectionTitle id={'techs'} text={'Технологии'} />
      <h3 className='techs__title'>7 технологий</h3>
      <p className='tects__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className='techs__container'>
        <Tech text={'HTML'} link={techsLinks.html} />
        <Tech text={'CSS'} link={techsLinks.css} />
        <Tech text={'JS'} link={techsLinks.js} />
        <Tech text={'React'} link={techsLinks.react} />
        <Tech text={'Git'} link={techsLinks.git} />
        <Tech text={`Express.js`} link={techsLinks.express} />
        <Tech text={'MongoDB'} link={techsLinks.mongo} />
      </div>
    </section>
  );
}

export default Techs;
