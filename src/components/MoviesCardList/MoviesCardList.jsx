import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import imageMovies from '../../images/movies/pic__COLOR_pic.jpg';

function MoviesCardList({ savedMoviesPage = false }) {
  const movie = {
    image: imageMovies,
    name: 'В погоне за Бенкси',
    duration: 123,
  };

  return (
    <section className='movies-card-list'>
      <MoviesCard
        movie={movie}
        saved={true}
        savedMoviesPage={savedMoviesPage}
      />
      <MoviesCard
        movie={movie}
        saved={false}
        savedMoviesPage={savedMoviesPage}
      />
      <MoviesCard
        movie={movie}
        saved={true}
        savedMoviesPage={savedMoviesPage}
      />
      <MoviesCard
        movie={movie}
        saved={false}
        savedMoviesPage={savedMoviesPage}
      />
    </section>
  );
}

export default MoviesCardList;
