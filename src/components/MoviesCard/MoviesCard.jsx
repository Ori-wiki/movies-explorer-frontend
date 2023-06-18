import React from 'react';

import './MoviesCard.css';

function MoviesCard({ movie, savedMoviesPage = false, saved = false }) {
  console.log(movie);

  return (
    <div className='movies-card'>
      <h4 className='movies-card__title'>В погоне за Бенкси</h4>
      <span className='movies-card__time'>27 минут</span>
      <img className='movies-card__img' alt='фильм' src={movie.image} />
      {savedMoviesPage ? (
        <button className='movies-card__button movies-card__button-delete'></button>
      ) : (
        <button
          className={
            saved
              ? 'movies-card__button movies-card__button-saved'
              : 'movies-card__button'
          }
        >
          {saved ? '' : 'Сохранить'}
        </button>
      )}
    </div>
  );
}

export default MoviesCard;
