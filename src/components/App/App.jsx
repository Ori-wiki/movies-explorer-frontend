import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  const headerEndpoints = ['/', '/movies', '/saved-movies', '/profile'];
  const footerEndpoints = ['/', '/movies', '/saved-movies'];

  const user = {
    name: 'Денис',
  };

  // useEffect(() => {
  //   getMovies()
  //     .then((res) => {
  //       setCards(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className='App'>
      <Routes>
        {headerEndpoints.map((path, i) => (
          <Route path={path} element={<Header loggedIn={true} />} key={i} />
        ))}
      </Routes>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
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
  );
}

export default App;
