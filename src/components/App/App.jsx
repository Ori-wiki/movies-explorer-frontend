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
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { register, login, signOut } from '../../utils/Auth';
import {
  getUserInfo,
  updateUserInfo,
  getSavedMovies,
  createMovie,
  deleteMovie,
} from '../../utils/MainApi';

import { HEADER_ENDPOINTS, FOOTER_ENDPOINTS } from '../../utils/constants';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const [registerErrorText, setRegisterErrorText] = useState({});
  const [loginErrorText, setLoginErrorText] = useState({});
  const [savedMoviesErrorText, setSavedMoviesErrorText] = useState(false);
  const [profileUpdateErrorText, setProfileUpdateErrorText] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isDataLoad, setIsDataLoad] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isOpen: false,
    successful: true,
    text: '',
  });

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
  }, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateSavedMovies = (movies) => {
    const savedMovies = movies.map((card) => ({ ...card, isSaved: true }));
    setSavedMovies(savedMovies);
  };

  const handleCreateMovie = (movie) => {
    createMovie(movie)
      .then((res) => {
        const newSavedMovies = [res, ...savedMovies];
        updateSavedMovies(newSavedMovies);
      })

      .catch((e) => {
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: e,
        });
        console.log(e);
      });
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMovies.find((item) => {
      if (item.id === movie.id) {
        return item;
      } else {
        return false;
      }
    });
    deleteMovie(savedMovie._id)
      .then((res) => {
        const newMoviesList = savedMovies.filter((film) => {
          if (movie.id === film.id) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newMoviesList);
      })
      .catch((e) => {
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: e,
        });
        console.log(e);
      });
  };

  const handleUpdateProfile = ({ name, email }) => {
    updateUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
        setProfileUpdateErrorText('');
        setIsInfoTooltip({
          isOpen: true,
          successful: true,
          text: 'Ваши данные успешно обновлены!',
        });
      })
      .catch((e) => {
        setProfileUpdateErrorText(e);
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: e,
        });
      });
  };

  function closeInfoTooltip() {
    setIsInfoTooltip({ ...isInfoTooltip, isOpen: false });
  }

  // Auth

  const handleLogin = ({ email, password }) => {
    setIsDataLoad(true);
    login({ email, password })
      .then(() => {
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((e) => {
        setLoginErrorText(e);
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: e,
        });
        console.log(e);
      })
      .finally(() => {
        setIsDataLoad(false);
      });
  };

  const handleRegister = ({ email, password, name }) => {
    setIsDataLoad(true);
    register({ email, password, name })
      .then((data) => {
        if (data) {
          handleLogin({ email, password });
        }
      })
      .catch((e) => {
        setRegisterErrorText(e);
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: e,
        });
        console.log(e);
      })
      .finally(() => {
        setIsDataLoad(false);
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
    if (loggedIn) {
      getSavedMovies()
        .then((movies) => {
          updateSavedMovies(movies);
          setSavedMoviesErrorText('');
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
          {HEADER_ENDPOINTS.map((path, i) => (
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
            element={
              <ProtectedRoute
                loggedIn={!loggedIn}
                element={Login}
                onLogin={handleLogin}
                errorText={loginErrorText}
                isDataLoad={isDataLoad}
              />
            }
          />
          <Route
            path='/sign-up'
            element={
              <ProtectedRoute
                loggedIn={!loggedIn}
                element={Register}
                onRegister={handleRegister}
                errorText={registerErrorText}
                isDataLoad={isDataLoad}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={Movies}
                onSave={handleCreateMovie}
                onDelete={handleDeleteMovie}
                savedMovies={savedMovies}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={SavedMovies}
                onDelete={handleDeleteMovie}
                savedMovies={savedMovies}
                isError={savedMoviesErrorText}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={Profile}
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
          {FOOTER_ENDPOINTS.map((path, i) => (
            <Route path={path} element={<Footer />} key={i} />
          ))}
        </Routes>
        <InfoTooltip status={isInfoTooltip} onClose={closeInfoTooltip} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
