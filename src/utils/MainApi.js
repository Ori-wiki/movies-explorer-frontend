import { checkResponse } from './utils';
import { MAIN_URL } from './constants';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
//user
export const getUserInfo = () => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers,
  }).then((res) => checkResponse(res));
};

export const updateUserInfo = ({ name, email }) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers,
    body: JSON.stringify({
      name,
      email,
    }),
  }).then((res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  });
};
//movies

export const getSavedMovies = () => {
  return fetch(`${MAIN_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers,
  }).then((res) => checkResponse(res));
};

export const createMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image: { url },
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  id,
}) => {
  console.log(typeof year);
  const image = url;
  return fetch(`${MAIN_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      id,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteMovie = ( _id ) => {
  return fetch(`${MAIN_URL}/movies/${_id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers,
  }).then((res) => checkResponse(res));
};
