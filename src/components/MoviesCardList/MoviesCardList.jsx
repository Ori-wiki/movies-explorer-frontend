import React, { useState } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, savedMoviesPage = false, number }) {
  // console.log(cards.slice(0, DEVICE_PARAMS.tablet.cards.total));

  return (
    <section className='movies-card-list'>
      {cards.slice(0, number).map((card) => (
        <MoviesCard
          card={card}
          savedMoviesPage={savedMoviesPage}
          key={card.id}
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
