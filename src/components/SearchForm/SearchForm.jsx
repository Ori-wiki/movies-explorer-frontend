import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__conntainer' name='search-form'>
        <input
          required
          autoComplete='off'
          className='search-form__input'
          type='text'
          name='movies'
          id='movies-input'
          placeholder='Фильм'
        />
        <button type='submit' className='search-form__button-submit'></button>
      </form>
      <span className='search-form__input-error'>sssdsdsss</span>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
