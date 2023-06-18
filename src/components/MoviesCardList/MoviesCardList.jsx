import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import imageMovies from '../../images/movies/pic__COLOR_pic.jpg';

function MoviesCardList() {
  const movie = {
    image: imageMovies,
    name: 'В погоне за Бенксиыфвфвфывфывфывфывфывфвфы фывфывыф',
    duration: 123,
  };

  return (
    <section className='movies__card-list'>
      <MoviesCard movie={movie} saved={true} savedMoviesPage={false} />
      <MoviesCard movie={movie} saved={false} savedMoviesPage={false} />
      <MoviesCard movie={movie} saved={true} savedMoviesPage={false} />
      <MoviesCard movie={movie} saved={false} savedMoviesPage={false} />
    </section>
  );
}

export default MoviesCardList;
