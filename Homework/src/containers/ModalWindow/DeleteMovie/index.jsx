import React from 'react';

import { useSelector } from 'react-redux';

import Button from '../../../components/Button';

const DeleteMovie = ({ title, movieId }) => {
    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);

    return activeModal === 'delete' && (
        <>
            <h1 className="modal-window-title">{title}</h1>
            <h3 className="modal-window-content">Are you sure you want to delete this movie?</h3>
            <div className="modal-window-action">
                <Button
                    className="modal-window-action-btn"
                    title="CONFIRM"
                />
            </div>
        </>
    )
};

export default DeleteMovie;