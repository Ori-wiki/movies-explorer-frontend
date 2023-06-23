import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ cards }) {
  // const [isDataLoading, setIsDataLoading] = useState(false);
  const isDataLoading = false;
  return (
    <section className='movies'>
      <SearchForm />
      {isDataLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList cards={cards} />{' '}
          <button className='movies__button'>Ещё</button>
        </>
      )}
    </section>
  );
}

export default Movies;
