import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { buildQueryString } from '../../util';

import './Search.scss';

const SearchMovie = () => {
  const history = useHistory();
  const query = useSelector(
    ({ movie: { sortBy, filter, search } }) => ({ sortBy, filter, search })
  );
  const [value, setValue] = useState('');

  const onHandleClick = () => {
    history.push({
      pathname: '/search',
      search: buildQueryString({ ...query, search: value })
    });
  };

  const onHandleChange = (e) => {
    setValue(e.target.value);
  };

  const onHandleChangeDebounce = useMemo(
    // PATTERN: Use Debouncing Event Action
    () => debounce(onHandleChange, 300), []
  );

  return (
    <div className="search-movie-container">
      <Input
        // PATTERN: Avoid Inline Function Definition in the Render Function
        onChange={onHandleChangeDebounce}
      />
      <Button
        className="search-movie-btn"
        title="SEARCH"
        // PATTERN: Avoid Inline Function Definition in the Render Function
        onClick={onHandleClick}
      />
    </div>
  );
};

export default SearchMovie;
