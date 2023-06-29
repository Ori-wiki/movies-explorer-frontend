import React, { useState, useEffect, useCallback } from 'react';
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

import { register, login, signOut } from '../../utils/Auth';
import {
  getUserInfo,
  updateUserInfo,
  getMovies,
  createMovie,
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
//   id: 1232,
// });
// getMovies();

function App() {
  const navigate = useNavigate();

  const headerEndpoints = ['/', '/movies', '/saved-movies', '/profile'];
  const footerEndpoints = ['/', '/movies', '/saved-movies'];

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerErrorText, setRegisterErrorText] = useState({});
  const [loginErrorText, setLoginErrorText] = useState({});
  const [profileUpdateErrorText, setProfileUpdateErrorText] = useState({});
  const [savedMovies, setSavedMovies] = useState({});

  const handleCreateMovie = (moive) => {
    createMovie(moive).catch((e) => console.log(e));
  };

  const handleUpdateProfile = ({ name, email }) => {
    updateUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
        setProfileUpdateErrorText('');
      })
      .catch((e) => {
        setProfileUpdateErrorText(e);
      });
  };

  // Auth

  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then((data) => {
        console.log(data);
        // localStorage.setItem('userId', data._id);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((e) => {
        setLoginErrorText(e);
        console.log(e);
      });
  };

  const handleRegister = ({ email, password, name }) => {
    register({ email, password, name })
      .then((data) => {
        console.log(data);
        // if (data) {
        handleLogin({ email, password });
        // }
      })
      .catch((e) => {
        setRegisterErrorText(e);
        console.log(e);
      });
  };

  const handleSingOut = () => {
    signOut();
    navigate('/');
    setLoggedIn(false);
    setCurrentUser('');
    localStorage.clear();
  };

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        setCurrentUser(res);
        navigate({ replace: false });
      })
      .catch((e) => {
        setLoggedIn(false);
        console.log(e);
      });
  }, [navigate]);

  useEffect(() => {
    getMovies()
      .then((movies) => {
        console.log(movies);
        setSavedMovies(movies);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
          <Route
            path='/sign-in'
            element={<Login onLogin={handleLogin} errorText={loginErrorText} />}
          />
          <Route
            path='/sign-up'
            element={
              <Register
                onRegister={handleRegister}
                errorText={registerErrorText}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <Movies
                handleCreateMovie={handleCreateMovie}
                savedMovies={savedMovies}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={<SavedMovies savedMovies={savedMovies} />}
          />
          <Route
            path='/profile'
            element={
              <Profile
                onUpdateProfile={handleUpdateProfile}
                onSingOut={handleSingOut}
                errorText={profileUpdateErrorText}
              />
            }
          />
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
