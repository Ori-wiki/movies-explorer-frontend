import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit }) {
  const [movie, setMovie] = React.useState('');
  function handleChangeName(e) {
    setMovie(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(movie);
  };

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
          value={movie || ''}
          onChange={handleChangeName}
        />
        <button type='submit' className='search-form__button-submit'></button>
      </form>
      <span className='search-form__input-error'>sssdsdsss</span>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
