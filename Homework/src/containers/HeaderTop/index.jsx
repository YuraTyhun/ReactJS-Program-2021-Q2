import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { closeMovieDetails, openModal } from '../../store/actions';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import SearchIcon from '../../assets/images/search.svg';

import './HeaderTop.scss';
import { buildQueryString } from '../../util';

const HeaderTop = () => {
  const detailsMovieData = useSelector(({ movie: { detailsMovie } }) => detailsMovie);
  const query = useSelector(
    ({ movie: { sortBy, filter, search } }) => ({ sortBy, filter, search })
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowAddModal = () => {
    dispatch(openModal('add'));
  };

  const handleCloseMovieDetails = () => {
    dispatch(closeMovieDetails());
    history.push({
      pathname: '/search',
      search: buildQueryString(query)
    });
  };

  return (
    <div className="header-top-container">
      <Logo />
      {detailsMovieData
        ? (
          <Button
            className="close-movie-details"
            // PATTERN: Avoid Inline Function Definition in the Render Function
            onClick={handleCloseMovieDetails}
            iconSrc={SearchIcon}
            iconAlt="search"
          />
        ) : (
          <Button
            className="add-movie-btn"
            title="+ ADD MOVIE"
            // PATTERN: Avoid Inline Function Definition in the Render Function
            onClick={handleShowAddModal}
          />
        )}
    </div>
  );
};

export default HeaderTop;
