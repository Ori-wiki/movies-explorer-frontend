import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import imageMovies from '../../images/movies/pic__COLOR_pic.jpg';

function MoviesCardList() {
  const movie = {
    image: imageMovies,
  };

  return (
    <section className='movies__card-list'>
      <MoviesCard movie={movie} saved={true} />
      <MoviesCard movie={movie} saved={false} />
      <MoviesCard movie={movie} saved={true} />
      <MoviesCard movie={movie} saved={false} />
    </section>
  );
}

export default MoviesCardList;
