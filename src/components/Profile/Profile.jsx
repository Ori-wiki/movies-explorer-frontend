import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile({ user }) {
  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, {user.name}!</h2>
      <form className='profile__form'>
        <label className='profile__label'>
          Имя
          <input
            required
            name='name'
            id='name-input'
            placeholder='Имя'
            minLength={2}
            maxLength={40}
            type='text'
            className='profile__input'
          />
          <span className='profile__input-error'></span>
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
          />
          <span className='profile__input-error'></span>
        </label>
        <button className='profile__button profile__button_edit'>
          Редактировать
        </button>
      </form>
      <Link to='/' className='profile__button profile__button_log-out'>
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
