import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

function App() {
  const endpoints = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
    '/sign-in',
    '/sign-up',
  ];

  return (
    <div className='App'>
      <Routes>
        {endpoints.map((path, i) => (
          <Route path={path} element={<Header loggedIn={true} />} key={i} />
        ))}
      </Routes>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-in' element={<Register />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Routes>
        {endpoints.map((path, i) => (
          <Route path={path} element={<Footer />} key={i} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
