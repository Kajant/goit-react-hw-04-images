import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function Searchbar({ onSubmit }) {
  const [keyword, setKeyword] = useState('');
  const onInputChange = event => setKeyword(event.target.value);
  const reset = () => setKeyword('');
  const onFormSubmit = event => {
    event.preventDefault();
    if (!keyword) {
      Notify.warning('Type what you want to search.');
      return;
    }
    onSubmit(keyword);
    reset();
  };

  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={onFormSubmit}>
          <button type="submit" className={css.SearchFormButton}></button>
          <input
            name="keyword"
            className={css.SearchFormInput}
            value={keyword}
            onChange={onInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;