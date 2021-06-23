import './ContextMenu.scss';

import Button from '../../components/Button';
import CloseIcon from '../../assets/close.svg';

import React from 'react';
import PropTypes from 'prop-types';

const ContextMenu = ({ showContextMenu, closeContextMenu }) => showContextMenu && (
    <div className="movie-context-menu">
        <Button className="movie-context-menu-close-btn" onClick={closeContextMenu}>
            <img src={CloseIcon} alt="close" />
        </Button>
        <ul>
            <li className="movie-context-menu-item">Edit</li>
            <li className="movie-context-menu-item">Delete</li>
        </ul>
    </div>
);

ContextMenu.propTypes = {
    showContextMenu: PropTypes.bool.isRequired,
    closeContextMenu: PropTypes.func.isRequired
}

export default ContextMenu;