import React, { useState } from 'react';

import './MoviesCard.css';

import { transformTime } from '../../utils/utils';

function MoviesCard({
  card,
  savedMoviesPage = false,
  onCreate = false,
  saved,
}) {
  const handleCreate = () => {
    onCreate(card);
  };

  return (
    <div className='movies-card'>
      <h4 className='movies-card__title'>{card.nameRU}</h4>
      <span className='movies-card__time'>{transformTime(card.duration)}</span>
      <img
        className='movies-card__img'
        alt='фильм'
        src={`https://api.nomoreparties.co${card.image.url}`}
      />
      {savedMoviesPage ? (
        <button className='movies-card__button movies-card__button-delete'></button>
      ) : (
        <button
          onClick={handleCreate}
          className={
            saved
              ? 'movies-card__button movies-card__button-saved'
              : 'movies-card__button'
          }
          disabled={saved ? true : false}
        >
          {saved ? '' : 'Сохранить'}
        </button>
      )}
    </div>
  );
}

export default MoviesCard;
