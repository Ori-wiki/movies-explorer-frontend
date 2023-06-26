import React, { useEffect, useState } from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { getMovies } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/utils';

function Movies() {
  const deviceParams = {
    laptop: {
      width: 1276,
      cards: {
        total: 12,
        step: 3,
      },
    },
    tablet: {
      width: 786,
      cards: {
        total: 8,
        step: 2,
      },
    },
    mobile: {
      width: 320,
      cards: {
        total: 5,
        step: 2,
      },
    },
  };
  const { laptop, tablet, mobile } = deviceParams;

  const [width, setWidth] = useState(window.innerWidth);
  const [number, setIsNumber] = useState(0);
  const [startNumber, setStartNumber] = useState(12);

  const [step, setStep] = useState(3);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [isError, setIsError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSetMovies = (res, movie) => {
    const movies = filterMovies(res, movie);
    setCards(movies);
    movies.length === 0 ? setNotFound(true) : setNotFound(false);
  };

  const handleSubmit = (movie) => {
    // localStorage.setItem('movieSearch', movie);
    setIsDataLoading(true);
    getMovies()
      .then((res) => {
        // console.log(res);
        handleSetMovies(res, movie);
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      })
      .finally(() => {
        // setIsNumber(number + 3);
        setIsDataLoading(false);
      });
  };

  const handleClick = () => {
    console.log(step);
    setIsNumber(number + step);
  };

  useEffect(() => {
    window.onresize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 700);
    };
  }, []);

  useEffect(() => {
    setStartNumber(
      width > laptop.width
        ? laptop.cards.total
        : width >= tablet.width
        ? tablet.cards.total
        : mobile.cards.total
    );
    setStep(
      width > laptop.width
        ? laptop.cards.step
        : width >= tablet.width
        ? tablet.cards.step
        : mobile.cards.step
    );
  }, [width, laptop, tablet, mobile]);

  console.log(number + ' number');
  console.log(startNumber + ' startNumber');
  // console.log(step);
  // console.log(cards);
  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSubmit} />
      {isDataLoading ? (
        <Preloader />
      ) : (
        <>
          {notFound ? (
            <h3 className='movies__not-found'>Ничего не найдено</h3>
          ) : isError ? (
            <h3 className='movies__error-req'>
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </h3>
          ) : (
            <MoviesCardList cards={cards} number={number + startNumber} />
          )}

          {3 <= startNumber && number + startNumber < cards.length ? (
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
