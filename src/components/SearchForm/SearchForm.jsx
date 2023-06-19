import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

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
        <button type='submit' className='search-form__button-submit'></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
