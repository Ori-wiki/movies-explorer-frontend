import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  moviesCards = [],
  savedMoviesPage = false,
  count,
  shortMoviesCards,
  onSave = false,
  onDelete = false,
  savedMovies = [],
}) {
  const getSavedCard = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.id === card.id);
  };

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
                onSave={onSave}
                onDelete={onDelete}
                saved={getSavedCard(savedMovies, card)}
              />
            ))
        : moviesCards
            .slice(0, count)
            .map((card) => (
              <MoviesCard
                card={card}
                savedMoviesPage={savedMoviesPage}
                key={card.id}
                onSave={onSave}
                onDelete={onDelete}
                saved={getSavedCard(savedMovies, card)}
              />
            ))}
    </section>
  );
}

export default MoviesCardList;
