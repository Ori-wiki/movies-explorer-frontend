import { checkResponse } from './utils';
import { MOVIES_URL } from './constants';

export const getMovies = () => {
  return fetch(MOVIES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res));
};
