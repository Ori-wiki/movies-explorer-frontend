import { checkResponse } from './utils';
import { MAIN_URL } from './constants';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const register = ({ name, email, password }) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    // credentials: 'include',
    headers,
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};

export const login = ({ email, password }) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};
