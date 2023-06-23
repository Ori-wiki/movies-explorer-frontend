import { checkResponse } from './utils';

const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const getMovies = () => {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res));
};

// console.log(getMovies() )
