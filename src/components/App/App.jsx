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
  getSavedMovies,
  createMovie,
  deleteMovie,
} from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();

  const headerEndpoints = ['/', '/movies', '/saved-movies', '/profile'];
  const footerEndpoints = ['/', '/movies', '/saved-movies'];

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerErrorText, setRegisterErrorText] = useState({});
  const [loginErrorText, setLoginErrorText] = useState({});
  const [savedMoviesErrorText, setSavedMoviesErrorText] = useState(false);
  const [profileUpdateErrorText, setProfileUpdateErrorText] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const updateSavedMovies = (movies) => {
    const savedMovies = movies.map((card) => ({ ...card, isSaved: true }));
    setSavedMovies(savedMovies);
    // localStorage.setItem('saved_movies', JSON.stringify(savedMovies));
  };

  const handleCreateMovie = (movie) => {
    createMovie(movie)
      .then((res) => {
        const newSavedMovies = [res, ...savedMovies];
        console.log(newSavedMovies);
        updateSavedMovies(newSavedMovies);
      })

      .catch((e) => console.log(e));
  };

  const handleDeleteMovie = (movie) => {
    deleteMovie(movie._id)
      .then((res) => {
        console.log(res);
        const newMoviesList = savedMovies.filter((m) => {
          console.log(movie);
          console.log(m);
          if (movie.id === m.id || movie.id === m.id) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newMoviesList);
      })
      .catch((e) => console.log(e));
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
  // если приходит ответ с сервера,
  // то авторизациноое куки передаются успешно
  useEffect(() => {
    getUserInfo()
      .then((res) => {
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
    if (loggedIn) {
      getSavedMovies()
        .then((movies) => {
          updateSavedMovies(movies);
        })
        .catch((e) => {
          setSavedMoviesErrorText(e);
          console.log(e);
        });
    }
  }, [loggedIn]);

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
            path='/saved-movies'
            element={
              <SavedMovies
                onClick={handleDeleteMovie}
                savedMovies={savedMovies}
                isError={savedMoviesErrorText}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <Movies onClick={handleCreateMovie} savedMovies={savedMovies} />
            }
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
