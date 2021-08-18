import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { deleteMovie } from '../../../store/actions';
import Button from '../../../components/Button';

const DeleteMovie = ({ title, movieId }) => {
  const activeModalWindow = useSelector(({ movie: { activeModal } }) => activeModal);
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(deleteMovie(movieId));
  };

  return activeModalWindow === 'delete' && (
  // PATTERN: Use Fragments to avoid additional HTML element wrappers
    <>
      <h1 className="modal-window-title">{title}</h1>
      <h3 className="modal-window-content">Are you sure you want to delete this movie?</h3>
      <div className="modal-window-action">
        <Button
          className="modal-window-action-btn"
          title="CONFIRM"
          // PATTERN: Avoid Inline Function Definition in the Render Function
          onClick={onConfirm}
        />
      </div>
    </>
  );
};

DeleteMovie.propTypes = {
  title: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired
};

export default DeleteMovie;
