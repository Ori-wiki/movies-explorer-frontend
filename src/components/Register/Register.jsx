import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';

import './Register.css';

import Logo from '../Logo/Logo';
import Preloader from '../Preloader/Preloader';

function Register({ onRegister, errorText = '', isDataLoad = false }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <section className='register'>
      {isDataLoad ? (
        <Preloader />
      ) : (
        <>
          <Logo />
          <h1 className='register__title'>Добро пожаловать!</h1>
          <form className='register__form' onSubmit={handleSubmit}>
            <label className='register__label'>
              Имя
              <input
                minLength={2}
                maxLength={40}
                pattern='^[A-Za-zА-Яа-яё \-]+$'
                required
                name='name'
                id='name-input'
                placeholder='Имя'
                type='text'
                className='register__input'
                value={values.name || ''}
                onChange={handleChange}
              />
            </label>
            <span
              className={`${
                errors.name
                  ? 'register__input-error register__input-error_visible'
                  : 'register__input-error'
              }`}
            >
              {errors.name}
            </span>
            <label className='register__label'>
              E-mail
              <input
                required
                name='email'
                placeholder='Email'
                className='register__input'
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
                  ? 'register__input-error register__input-error_visible'
                  : 'register__input-error'
              }`}
            >
              {errors.email}
            </span>
            <label className='register__label'>
              Пароль
              <input
                required
                name='password'
                placeholder='Пароль'
                className='register__input'
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
                  ? 'register__input-error register__input-error_visible'
                  : 'register__input-error'
              }`}
            >
              {errors.password}
            </span>
            <span
              className={`${
                errorText.message
                  ? 'register__form-error register__form-error_visible'
                  : 'register__form-error'
              }`}
            >
              {errorText.message}
            </span>
            <button
              type='submit'
              className={
                isValid
                  ? 'register__button-submit'
                  : 'register__button-submit register__button-submit_disable'
              }
              disabled={!isValid && true}
            >
              Зарегистрироваться
            </button>
          </form>

          <span className='register__text'>
            Уже зарегистрированы?
            <Link className='register__link' to='/sign-in'>
              Войти
            </Link>
          </span>
        </>
      )}
    </section>
  );
}

export default Register;
