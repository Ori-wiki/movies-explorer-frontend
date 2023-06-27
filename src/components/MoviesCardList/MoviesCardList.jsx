import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, savedMoviesPage = false, count }) {
  console.log(cards.length + 'длина карточек');

  return (
    <section className='movies-card-list'>
      {cards.slice(0, count).map((card) => (
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
