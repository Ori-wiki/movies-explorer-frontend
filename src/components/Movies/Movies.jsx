import React, { useEffect, useState } from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { getMovies } from '../../utils/MoviesApi';
import { filterMovies, filterShortMovies } from '../../utils/utils';

import { deviceParams } from '../../utils/constants';

function Movies() {
  const { laptop, tablet, mobile } = deviceParams;
  const [width, setWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem('total')) || 12
  );
  const [step, setStep] = useState(3);

  const [isDataLoading, setIsDataLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [isError, setIsError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [checkboxValue, setcheckboxValue] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('movies')) {
      console.log('нету муви');
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
  }, [width, laptop, tablet, mobile, cards, total]);

  useEffect(() => {
    window.onresize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 700);
    };
  }, []);
  console.log(total + ' total ' + step + ' step ');

  const handleSetMovies = (res, movie) => {
    const movies = filterMovies(res, movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    setCards(movies);
    movies.length === 0 ? setNotFound(true) : setNotFound(false);
  };

  const handleSubmit = (movie) => {
    localStorage.setItem('movieSearch', movie);
    setIsDataLoading(true);
    setCount(0);
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
    console.log('чекбокс клик');
    if (!checkboxValue) {
      if (filterShortMovies(cards).length === 0) {
        // setFilteredMovies(filterShortMovies(cards));
        console.log('aaaaaa');
        setNotFound(true);
        //   } else {
        //     setFilteredMovies(filterShortMovies(initialMovies));
        //     setNotFound(false);
        //   }
        // } else {
        //   initialMovies.length === 0 ? setNotFound(true) : setNotFound(false);
        //   setFilteredMovies(initialMovies);
        // }
        // localStorage.setItem(`${user.email} - shortMovies`, !shortMovies);
      }
    }
  };

  const handleClick = () => {
    console.log('+1');
    setCount(count + step);
    localStorage.setItem('count', count + step);
  };

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const list = JSON.parse(localStorage.getItem('movies'));
      if (list.length === 0) {
        setNotFound(true);
        console.log('меняет на тру');
      } else {
        setNotFound(false);
        console.log('меняет на фалсе');
        setCards(list);
      }
    }
    if (localStorage.getItem('count')) {
      const num = JSON.parse(localStorage.getItem('count'));
      console.log(num + 'num');
      setCount(num);
    }
  }, []);

  console.log(notFound);
  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSubmit} checkboxClick={handleShortFilms} />
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
            <MoviesCardList cards={cards} count={count + total} />
          )}

          {0 < total && count + total < cards.length ? (
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
