import React from 'react';
import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList savedMoviesPage={true} />
    </section>
  );
}

export default SavedMovies;
