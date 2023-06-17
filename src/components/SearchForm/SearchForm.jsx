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
      <div className='search-form__box'>
        <input
          className='search-form__checkbox'
          type='checkbox'
          name='short-movies'
          id='short-movies-checkbox'
        />
        <label className='seacrh-form__label'>Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
