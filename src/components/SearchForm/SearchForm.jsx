import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../hooks/useForm';

function SearchForm({ onSubmit, checkboxClick, checkboxValue }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.movie);
  }
  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('movieSearch')
    ) {
      const movieValue = localStorage.getItem('movieSearch');
      values.movie = movieValue;
    }
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className='search-form'>
      <form
        className='search-form__conntainer'
        name='search-form'
        onSubmit={handleSubmit}
      >
        <input
          required
          autoComplete='off'
          className='search-form__input'
          type='text'
          name='movie'
          id='movies-input'
          placeholder='Фильм'
          value={values.movie || ''}
          onChange={handleChange}
        />
        <button
          type='submit'
          className={
            isValid
              ? 'search-form__button-submit'
              : 'search-form__button-submit search-form__button-submit_disable'
          }
          disabled={!isValid && true}
        ></button>
      </form>
      <span
        className={`${
          errors.movie
            ? 'search-form__input-error search-form__input-error_visable'
            : 'search-form__input-error'
        }`}
      >
        Нужно ввести ключевое слово
      </span>
      <FilterCheckbox
        checkboxClick={checkboxClick}
        checkboxValue={checkboxValue}
      />
    </section>
  );
}

export default SearchForm;
