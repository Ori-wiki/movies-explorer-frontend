import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      <button className='movie__button'>Ещё</button>
    </section>
  );
}

export default Movies;
