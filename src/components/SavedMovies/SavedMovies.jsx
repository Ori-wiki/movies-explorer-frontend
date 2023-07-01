import React, { useState, useEffect } from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { filterMovies, filterShortMovies } from '../../utils/utils';

function SavedMovies({ onDelete, savedMovies, isError }) {
  const [notFound, setNotFound] = useState(false);
  const [checkboxValue, setcheckboxValue] = useState(false);
  const [moviesCards, setMoviesCards] = useState([]);
  const [shortMoviesCards, setShortMoviesCards] = useState([]);

  useEffect(() => {
    console.log('пиво');
    setMoviesCards(savedMovies);
  }, [savedMovies]);

  console.log(savedMovies);
  const handleSubmit = (movie) => {
    console.log(savedMovies + movie);
    localStorage.setItem('savedMovieSearch', movie);
    const movies = filterMovies(savedMovies, movie);
    console.log(movies);
    movies.length === 0 ? setNotFound(true) : setNotFound(false);
    setMoviesCards(movies);
    localStorage.setItem('savedMovies', JSON.stringify(movies));
    if (checkboxValue) {
      const shortMovies = filterShortMovies(movies);
      shortMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      setShortMoviesCards(shortMovies);
    }
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
      }
    } else {
      if (moviesCards.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
        setShortMoviesCards([]);
      }
    }
  };
  // useEffect(() => {
  //   setMoviesCards(savedMovies);
  // }, [savedMovies]);

  return (
    <section className='saved-movies'>
      <SearchForm
        onSubmit={handleSubmit}
        checkboxClick={handleShortFilms}
        checkboxValue={checkboxValue}
      />

      <>
        {notFound ? (
          <h3 className='movies__not-found'>Ничего не найдено</h3>
        ) : isError ? (
          <h3 className='movies__error-req'>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </h3>
        ) : (
          <MoviesCardList
            onDelete={onDelete}
            savedMoviesPage={true}
            moviesCards={moviesCards}
            count={savedMovies.length}
            shortMoviesCards={shortMoviesCards}
            savedMovies={savedMovies}
          />
        )}
      </>
    </section>
  );
}

export default SavedMovies;
