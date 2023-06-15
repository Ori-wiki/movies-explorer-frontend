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

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/main' element={Main} />
        <Route path='/sign-in' element={Login} />
        <Route path='/sign-in' element={Register} />
        <Route path='/movies' element={Movies} />
        <Route path='/saved-movies' element={SavedMovies} />
        <Route path='/profile' element={Profile} />
      </Routes>
    </div>
  );
}

export default App;
