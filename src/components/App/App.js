import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Login from '../Login.js';
import Register from '../Register.js';
import Main from '../Main.js';
import Movies from '../Movies.js';
import SavedMovies from '../SavedMovies.js';
import Profile from '../Profile.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/sign-in' element={Login} />
        <Route path='/sign-in' element={Register} />
        <Route path='/' element={Main} />
        <Route path='/movies' element={Movies} />
        <Route path='/saved-movies' element={SavedMovies} />
        <Route path='/profile' element={Profile} />
      </Routes>
    </div>
  );
}

export default App;
