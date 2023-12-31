export const DEVICE_PARAMS = {
  laptop: {
    width: 1276,
    cards: {
      total: 12,
      step: 3,
    },
  },
  tablet: {
    width: 768,
    cards: {
      total: 8,
      step: 2,
    },
  },
  mobile: {
    width: 320,
    cards: {
      total: 5,
      step: 2,
    },
  },
};

export const HEADER_ENDPOINTS = ['/', '/movies', '/saved-movies', '/profile'];
export const FOOTER_ENDPOINTS = ['/', '/movies', '/saved-movies'];

export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MAIN_URL = 'https://api.muda.nomoredomains.rocks';
// export const MAIN_URL = 'http://localhost:3000';

export const SHORTMOVIES_DURATION = 40;
