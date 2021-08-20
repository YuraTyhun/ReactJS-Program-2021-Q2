import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import CloseIcon from '../../assets/images/close.svg';

import './ContextMenu.scss';

const ContextMenu = ({ showContextMenu, closeContextMenu, showModal }) => showContextMenu && (
  <div className="movie-context-menu">
    <Button
      className="movie-context-menu-close-btn"
      onClick={closeContextMenu}
      iconSrc={CloseIcon}
      iconAlt="close"
    />
    <ul>
      <li
        className="movie-context-menu-item"
        onClick={() => showModal('edit')}
        role="presentation"
      >
        Edit
      </li>
      <li
        className="movie-context-menu-item"
        onClick={() => showModal('delete')}
        role="presentation"
      >
        Delete
      </li>
    </ul>
  </div>
);

ContextMenu.propTypes = {
  showContextMenu: PropTypes.bool.isRequired,
  closeContextMenu: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default ContextMenu;
