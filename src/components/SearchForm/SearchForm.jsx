import React from 'react';

import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__conntainer' name='search-form'>
        <input
          className='search-form__input'
          type='text'
          name='movies'
          id='movies-input'
          placeholder='Фильм'
        />
        <button className='search-form__button-submit'></button>
      </form>
      <div className='search-form__block'>
        <label className='seacrh-form__label'>
          <input
            className='search-form__checkbox'
            type='checkbox'
            name='short-movies'
            id='short-movies-checkbox'
          />
          <span className='searh-from__box'></span>
          Короткометражки
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
