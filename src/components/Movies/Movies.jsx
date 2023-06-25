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
  const [number, setIsNumber] = useState(12);
  const [step, setStep] = useState(3);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = (movie) => {
    setIsDataLoading(true);
    localStorage.setItem('movieSearch', movie);
    getMovies()
      .then((res) => {
        console.log(res);
        setCards(filterMovies(res, movie));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsNumber(number);
        setIsDataLoading(false);
      });
  };

  const handleClick = () => {
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
    setIsNumber(
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

  // console.log(number);
  // console.log(step);
  console.log(cards);
  return (
    <section className='movies'>
      <SearchForm onSubmit={handleSubmit} />
      {isDataLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList cards={cards} number={number} />
          {3 <= number && number < cards.length ? (
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
