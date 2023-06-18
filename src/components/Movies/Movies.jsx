import React, { useState } from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [isDataLoading, setIsDataLoading] = useState(false);

  return (
    <section className='movies'>
      <SearchForm />
      {isDataLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList /> <button className='movie__button'>Ещё</button>
        </>
      )}
    </section>
  );
}

export default Movies;
