import { checkResponse } from './utils';
import { MAIN_URL } from './constants';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const register = async ({ name, email, password }) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  });
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
  }).then((res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  });
};
