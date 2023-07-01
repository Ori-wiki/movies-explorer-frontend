import React, { useEffect, useState } from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { getMovies } from '../../utils/MoviesApi';

import { filterMovies, filterShortMovies } from '../../utils/utils';

import { deviceParams } from '../../utils/constants';

function Movies({ onSave, onDelete, savedMovies }) {
  const { laptop, tablet, mobile } = deviceParams;
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem('total')) || 12
  );
  const [step, setStep] = useState(3);

  const [isDataLoading, setIsDataLoading] = useState(false);
  const [moviesCards, setMoviesCards] = useState([]);
  const [shortMoviesCards, setShortMoviesCards] = useState([]);
  const [isError, setIsError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [checkboxValue, setcheckboxValue] = useState(false);

  const handleSetMovies = (res, movie) => {
    const movies = filterMovies(res, movie);
    movies.length === 0 ? setNotFound(true) : setNotFound(false);
    setMoviesCards(movies);
    localStorage.setItem('movies', JSON.stringify(movies));
    if (checkboxValue) {
      const shortMovies = filterShortMovies(movies);
      shortMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      setShortMoviesCards(shortMovies);
    }
  };

  const handleSubmit = (movie) => {
    localStorage.setItem('movieSearch', movie);
    setIsDataLoading(true);
    setCount(0);
    setTotal(
      width >= laptop.width
        ? laptop.cards.total
        : width >= tablet.width
        ? tablet.cards.total
        : mobile.cards.total
    );
    getMovies()
      .then((res) => {
        handleSetMovies(res, movie);
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  };

  const handleShortFilms = () => {
    setcheckboxValue(!checkboxValue);
    localStorage.setItem('checkboxValue', !checkboxValue);
    if (!checkboxValue) {
      const shortMovies = filterShortMovies(moviesCards);
      if (shortMovies.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
        setShortMoviesCards(shortMovies);
        localStorage.setItem('shortMovies', JSON.stringify(shortMovies));
      }
    } else {
      if (moviesCards.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
        localStorage.removeItem('shortMovies');
        setShortMoviesCards([]);
      }
    }
  };

  const handleClick = () => {
    setCount(count + step);
    localStorage.setItem('count', count + step);
  };

  useEffect(() => {
    if (!localStorage.getItem('movies')) {
      setTotal(
        width >= laptop.width
          ? laptop.cards.total
          : width >= tablet.width
          ? tablet.cards.total
          : mobile.cards.total
      );
    }
    setStep(
      width >= laptop.width
        ? laptop.cards.step
        : width >= tablet.width
        ? tablet.cards.step
        : mobile.cards.step
    );
    localStorage.setItem('total', total);
  }, [width, laptop, tablet, mobile, total]);

  useEffect(() => {
    window.onresize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 700);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem('shortMovies')) {
      const shortList = JSON.parse(localStorage.getItem('shortMovies'));
      if (shortList.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
        setShortMoviesCards(shortList);
      }
    }

    if (localStorage.getItem('movies')) {
      const list = JSON.parse(localStorage.getItem('movies'));
      if (list.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
        setMoviesCards(list);
      }
    }

    if (localStorage.getItem('count')) {
      const num = JSON.parse(localStorage.getItem('count'));
      setCount(num);
    }

    if (localStorage.getItem('checkboxValue')) {
      const check = JSON.parse(localStorage.getItem('checkboxValue'));
      setcheckboxValue(check);
    }
  }, []);
  console.log(savedMovies);
  return (
    <section className='movies'>
      <SearchForm
        onSubmit={handleSubmit}
        checkboxClick={handleShortFilms}
        checkboxValue={checkboxValue}
      />
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
            <MoviesCardList
              onSave={onSave}
              onDelete={onDelete}
              savedMoviesPage={false}
              moviesCards={moviesCards}
              count={count + total}
              shortMoviesCards={shortMoviesCards}
              savedMovies={savedMovies}
            />
          )}

          {shortMoviesCards.length !== 0 ? (
            0 < total && count + total < shortMoviesCards.length ? (
              <button className='movies__button' onClick={handleClick}>
                Ещё
              </button>
            ) : (
              ''
            )
          ) : 0 < total && count + total < moviesCards.length ? (
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
