import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

import Logo from '../Logo/Logo';

function Register() {
  return (
    <section className='register'>
      <Logo />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
        <label className='register__label'>
          Имя
          <input
            required
            name='name'
            id='name-input'
            placeholder='Имя'
            minLength={2}
            maxLength={40}
            type='text'
            className='register__input'
          />
          <span className='register__input-error'></span>
        </label>
        <label className='register__label'>
          E-mail
          <input
            required
            name='email'
            placeholder='Email'
            className='register__input'
            type='email'
          ></input>
        </label>
        <span className='register__input-error'></span>
        <label className='register__label'>
          Пароль
          <input
            required
            name='password'
            placeholder='Пароль'
            className='register__input'
            type='password'
          ></input>
        </label>
        <span className='register__input-error'>Что-то пошло не так...</span>
        <button type='submit' className='register__button-submit'>
          Зарегистрироваться
        </button>
      </form>
      <span className='register__text'>
        Уже зарегистрированы?
        <Link className='register__link' to='/sign-in'>
          Войти
        </Link>
      </span>
    </section>
  );
}

export default Register;
