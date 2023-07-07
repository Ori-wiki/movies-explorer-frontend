import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({ checkboxClick, checkboxValue }) {
  return (
    <div className='search-form__block'>
      <label className='search-form__label'>
        <input
          className='search-form__checkbox'
          type='checkbox'
          name='short-movies'
          id='short-movies-checkbox'
          onChange={checkboxClick}
          checked={checkboxValue}
        />
        <span className='search-form__box'></span>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
