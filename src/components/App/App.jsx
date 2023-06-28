import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';

import { register, login } from '../../utils/Auth';
import {
  getUserInfo,
  updateUserInfo,
  getMovies,
  createMovies,
  deleteMovie,
} from '../../utils/MainApi';

// register({
//   name: 'Денdsdsdиdssdsс',
//   email: 'dendddsdfss-akov-95@mail.ru',
//   password: 'zxczxczxc',
// });

// login({ email: 'igor@gmail.com', password: 'zxczxczxc' });
// updateUserInfo({ name: 'НАСТЯ', email: 'igor@gmail.com' });
// createMovies({
//   country: 'Fidnc',
//   director: 'Fincher',
//   duration: 1800,
//   year: '1984',
//   description: 'qqqqqqqqqqqqqqqqqq',
//   image: 'https://media.filmz.ru/photos/full/filmz.ru_f_32492.jpg',
//   trailerLink: 'https://www.youtube.com/watch?v=YA6rUpVFKv8',
//   nameRU: 'Чужой',
//   nameEN: 'Alien',
//   thumbnail: 'https://i.ytimg.com/vi/bjXtYoAfS8g/maxresdefault.jpg',
//   movieId: 1232,
// });
// getMovies();

function App() {
  const navigate = useNavigate();

  const headerEndpoints = ['/', '/movies', '/saved-movies', '/profile'];
  const footerEndpoints = ['/', '/movies', '/saved-movies'];

  const user = {
    name: 'Денис',
  };

  const [currentUser, setCurrentUset] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  // Auth

  const handleRegister = ({ email, password, name }) => {
    console.log('рега пошла');
    register({ email, password, name })
      .then((data) => {
        if (data) {
          handleLogin({ email, password });
        }
      })
      .catch((e) => console.log(e));
  };

  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((e) => console.log(e));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Routes>
          {headerEndpoints.map((path, i) => (
            <Route
              path={path}
              element={<Header loggedIn={loggedIn} />}
              key={i}
            />
          ))}
        </Routes>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sign-in' element={<Login onLogin={handleLogin} />} />
          <Route
            path='/sign-up'
            element={<Register onRegister={handleRegister} />}
          />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile user={user} />} />
          <Route
            path='/*'
            element={<Error message='Страница не найдена' status='404' />}
          />
        </Routes>
        <Routes>
          {footerEndpoints.map((path, i) => (
            <Route path={path} element={<Footer />} key={i} />
          ))}
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
