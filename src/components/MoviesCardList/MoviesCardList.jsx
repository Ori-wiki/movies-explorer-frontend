import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import imageMovies from '../../images/movies/pic__COLOR_pic.jpg';

function MoviesCardList({ cards, savedMoviesPage = false }) {
  const movie = {
    image: imageMovies,
    name: 'В погоне за Бенкси',
    duration: 123,
  };

  return (
    <section className='movies-card-list'>
      {cards.map((card) => (
        <MoviesCard card={card} savedMoviesPage={savedMoviesPage} />
      ))}
    </section>
  );
}

export default MoviesCardList;

/* <MoviesCard
        movie={movie}
        saved={true}
        savedMoviesPage={savedMoviesPage}
      /> */
