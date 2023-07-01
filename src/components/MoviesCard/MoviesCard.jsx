import React from 'react';

import './MoviesCard.css';

import { transformTime } from '../../utils/utils';
import { Link } from 'react-router-dom';

function MoviesCard({
  card,
  savedMoviesPage = false,
  onSave = false,
  onDelete = false,
  saved,
}) {
  const handleSave = () => {
    onSave(card);
  };
  const handleDelete = () => {
    onDelete(card);
  };

  return (
    <div className='movies-card'>
      <h4 className='movies-card__title'>{card.nameRU}</h4>
      <span className='movies-card__time'>{transformTime(card.duration)}</span>
      <Link to={card.trailerLink} target='_blank' className='movies-card__link'>
        <img
          className='movies-card__link-img'
          alt='фильм'
          src={`https://api.nomoreparties.co${card.image.url || card.image}`}
        />
      </Link>
      {savedMoviesPage ? (
        <button
          onClick={handleDelete}
          className='movies-card__button movies-card__button-delete'
        ></button>
      ) : (
        <button
          onClick={saved ? handleDelete : handleSave}
          className={
            saved
              ? 'movies-card__button movies-card__button-saved'
              : 'movies-card__button'
          }
          // disabled={saved ? true : false}
        >
          {saved ? '' : 'Сохранить'}
        </button>
      )}
    </div>
  );
}

export default MoviesCard;
