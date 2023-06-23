import React, { useState, useRef, useEffect } from 'react';
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

  const elRef = useRef();

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
      .finally(() => setIsDataLoading(false));
  };
  // console.log(number);
  const handleClick = () => {
    setIsNumber(number + 243);
  };

  // useEffect(() => {
  //   let Elementcount = elRef.current.childNodes[1].childNodes.length;
  //   console.log(Elementcount);
  // }, [setIsNumber]);
  console.log(elRef.current);
  return (
    <section className='movies' ref={elRef}>
      <SearchForm onSubmit={handleSubmit} />
      {isDataLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList cards={cards} number={number + 3} />
          {2 && number < 100 ? (
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
