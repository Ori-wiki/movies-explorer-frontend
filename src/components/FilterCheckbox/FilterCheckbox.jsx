import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='search-form__block'>
      <label className='search-form__label'>
        <input
          className='search-form__checkbox'
          type='checkbox'
          name='short-movies'
          id='short-movies-checkbox'
        />
        <span className='search-form__box'></span>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
