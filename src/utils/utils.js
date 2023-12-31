import { SHORTMOVIES_DURATION } from "./constants";

function endingOfNum(n, textForms) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0];
  }
  return textForms[2];
}

export const transformTime = (duration) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes} ${endingOfNum(minutes, ['минута', 'минуты', 'минут'])}`;
  } else {
    return `${hours} ${endingOfNum(hours, [
      'час',
      'часа',
      'часов',
    ])} ${minutes} ${endingOfNum(minutes, ['минута', 'минуты', 'минут'])}`;
  }
};

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json(); //если да, то возвращает полученные данные
  }
  return Promise.reject(`Error: ${res.status}`); //иначе возвращает ошибку
};

export const filterMovies = (movies, query) => {
  const moviesQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = query.toLowerCase().trim();
    return (
      movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1
    );
  });
  return moviesQuery;
};

export const filterShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration < SHORTMOVIES_DURATION);
};
