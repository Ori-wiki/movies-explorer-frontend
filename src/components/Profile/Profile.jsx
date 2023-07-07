import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ onSingOut, onUpdateProfile, errorText = {} }) {
  const [saveChanged, setSaveChanged] = useState(false);
  const [profileErrorText, setProfileErrorText] = useState(errorText);

  const { values, errors, isValid, handleChange, resetForm, setValues } =
    useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    if (currentUser) {
      resetForm();
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [resetForm, currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(values);
    setSaveChanged(false);
  };

  const handleChangeData = (e) => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setProfileErrorText({
        message: 'Имя и email совпадают с предыдущими значениями',
      });
    } else {
      e.preventDefault();
      setSaveChanged(true);
      setProfileErrorText({ message: '' });
    }
  };
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' onSubmit={handleSubmit}>
        <label className='profile__label'>
          Имя
          <input
            required
            name='name'
            id='name-input'
            placeholder='Имя'
            minLength={2}
            maxLength={40}
            pattern='^[A-Za-zА-Яа-яё \-]+$'
            type='text'
            className='profile__input'
            value={values.name || ''}
            onChange={handleChange}
            disabled={saveChanged ? true : false}
          />
          <span
            id='profile__input-error-name'
            className={`${
              errors.name
                ? 'profile__input-error profile__input-error_visible'
                : 'profile__input-error'
            }`}
          >
            {errors.name}
          </span>
        </label>
        <label className='profile__label'>
          E-mail
          <input
            required
            name='email'
            id='email-input'
            placeholder='E-mail'
            minLength={2}
            maxLength={40}
            type='email'
            className='profile__input'
            value={values.email || ''}
            onChange={handleChange}
            disabled={saveChanged ? true : false}
          />
          <span
            id='profile__input-error-email'
            className={`${
              errors.email
                ? 'profile__input-error profile__input-error_visible'
                : 'profile__input-error'
            }`}
          >
            {errors.email}
          </span>
        </label>
        <span
          id=''
          className={`${
            profileErrorText.message
              ? 'profile__form-error profile__form-error_visible'
              : 'profile__form-error'
          }`}
        >
          {profileErrorText.message}
        </span>
        {saveChanged ? (
          <button
            type='submit'
            className={
              isValid
                ? 'profile__button profile__button-submit'
                : 'profile__button profile__button-submit profile__button-submit_disable'
            }
            disabled={!isValid && true}
          >
            Сохранить
          </button>
        ) : (
          <button
            onClick={handleChangeData}
            type='button'
            className={
              isValid
                ? 'profile__button profile__button-submit'
                : 'profile__button profile__button-submit profile__button-submit_disable'
            }
            disabled={!isValid && true}
          >
            Редактировать
          </button>
        )}
      </form>
      <Link
        to='/'
        className='profile__button profile__button_log-out'
        onClick={onSingOut}
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
