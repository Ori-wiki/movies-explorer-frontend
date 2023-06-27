import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  moviesCards,
  savedMoviesPage = false,
  count,
  shortMoviesCards,
}) {
  console.log(shortMoviesCards);
  console.log(moviesCards);

  return (
    <section className='movies-card-list'>
      {shortMoviesCards.length !== 0
        ? shortMoviesCards
            .slice(0, count)
            .map((card) => (
              <MoviesCard
                card={card}
                savedMoviesPage={savedMoviesPage}
                key={card.id}
              />
            ))
        : moviesCards
            .slice(0, count)
            .map((card) => (
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
