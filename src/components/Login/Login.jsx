import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

import Logo from '../Logo/Logo';

function Login() {
  return (
    <section className='login'>
      <Logo />
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <label className='login__label'>
          E-mail
          <input
            required
            name='email'
            placeholder='Email'
            className='login__input'
            type='email'
          ></input>
        </label>
        <span className='login__input-error'></span>
        <label className='login__label'>
          Пароль
          <input
            required
            name='password'
            placeholder='Пароль'
            className='login__input'
            type='password'
          ></input>
        </label>
        <span className='login__input-error'></span>
        <button type='submit' className='login__button-submit'>
          Войти
        </button>
      </form>
      <span className='login__text'>
        Ещё не зарегистрированы?
        <Link className='login__link' to='/sign-up'>
          Регистрация
        </Link>
      </span>
    </section>
  );
}

export default Login;
