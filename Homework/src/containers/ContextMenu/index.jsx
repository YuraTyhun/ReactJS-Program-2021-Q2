import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import CloseIcon from '../../assets/images/close.svg';

import './ContextMenu.scss';

const ContextMenu = ({showContextMenu, closeContextMenu, showModal }) => {

    return showContextMenu && (
        <>
            <div className="movie-context-menu">
                <Button className="movie-context-menu-close-btn" onClick={closeContextMenu}>
                    <img src={CloseIcon} alt="close" />
                </Button>
                <ul>
                    <li 
                        className="movie-context-menu-item"
                        onClick={() => showModal('edit')}
                    >
                        Edit
                    </li>
                    <li
                        className="movie-context-menu-item"
                        onClick={() => showModal('delete')}
                    >
                        Delete
                    </li>
                </ul>
            </div>
        </>

    );
}

ContextMenu.propTypes = {
    showContextMenu: PropTypes.bool.isRequired,
    closeContextMenu: PropTypes.func.isRequired
}

export default ContextMenu;