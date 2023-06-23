import React, { useState } from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { getMovies } from '../../utils/MoviesApi';

function Movies() {
  const DEVICE_PARAMS = {
    tablet: {
      width: 768,
      cards: {
        total: 9,
        more: 3,
      },
    },
  };

  const [number, setIsNumber] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDataLoading(true);
    getMovies()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsNumber(number + 3);
        setIsDataLoading(false);
      });
  };
  // console.log(number);
  const handleClick = () => {
    setIsNumber(number + 3);
  };

  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSubmit} />
      {isDataLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList cards={cards} number={number} />
          {3 <= number && number < 100 ? (
            <button className='movies__button' onClick={handleClick}>
              Ещё
            </button>
          ) : (
            ''
          )}
        </>
      )}
    </section>
  );
}

export default Movies;
