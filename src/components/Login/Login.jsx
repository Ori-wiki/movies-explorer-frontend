import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';

import './Login.css';

import Logo from '../Logo/Logo';

function Login({ onLogin }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    onLogin(values);
  };

  return (
    <section className='login'>
      <Logo />
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form' onSubmit={handleSubmit}>
        <label className='login__label'>
          E-mail
          <input
            required
            name='email'
            placeholder='Email'
            className='login__input'
            type='email'
            minLength={2}
            maxLength={40}
            value={values.email || ''}
            onChange={handleChange}
          ></input>
        </label>
        <span
          className={`${
            errors.email
              ? 'login__input-error login__input-error_visible'
              : 'login__input-error'
          }`}
        >
          {errors.email}
        </span>
        <label className='login__label'>
          Пароль
          <input
            required
            name='password'
            placeholder='Пароль'
            className='login__input'
            type='password'
            minLength={8}
            maxLength={40}
            value={values.password || ''}
            onChange={handleChange}
          ></input>
        </label>
        <span
          className={`${
            errors.password
              ? 'login__input-error login__input-error_visible'
              : 'login__input-error'
          }`}
        >
          {errors.password}
        </span>
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
