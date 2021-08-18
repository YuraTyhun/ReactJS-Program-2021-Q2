import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { closeModal } from '../../store/actions';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import DeleteMovie from './DeleteMovie';
import EditMovie from './EditMovie';
import AddMovie from './AddMovie';
import CloseIcon from '../../assets/images/close.svg';

import './ModalWindow.scss';

const ModalWindow = () => {
  const activeModalWindow = useSelector(({ movie: { activeModal } }) => activeModal);
  const activeMovieData = useSelector(({ movie: { activeMovie } }) => activeMovie);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleKeydownEvent = useCallback((e) => {
    if (e.key === 'Escape') {
      dispatch(closeModal());
    }
  }, [dispatch]);

  useEffect(() => {
    if (activeModalWindow) {
      window.addEventListener('keydown', handleKeydownEvent);
    }
    return () => {
      window.removeEventListener('keydown', handleKeydownEvent);
    };
  }, [activeModalWindow, handleKeydownEvent]);

  const containerClasses = classNames({
    'modal-window-container': true,
    'active-modal-height': activeModalWindow === 'delete'
  });

  return activeModalWindow && (
  <div className={containerClasses}>
    <div className="blur-filter">
      <Logo />
      <div className="modal-window-wrapper">
        <Button
          className="modal-window-close-btn"
          // PATTERN: Avoid Inline Function Definition in the Render Function
          onClick={handleCloseModal}
          iconSrc={CloseIcon}
          iconAlt="close"
        />
        <div className="modal-window-body">
          {activeMovieData && <DeleteMovie title="DELETE MOVIE" movieId={activeMovieData.id} />}
          {activeMovieData && <EditMovie modalTitle="EDIT MOVIE" movie={activeMovieData} /> }
          <AddMovie modalTitle="ADD MOVIE" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default ModalWindow;
