import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { closeModal } from '../../store/actions';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import DeleteMovie from '../ModalWindow/DeleteMovie';
import EditMovie from '../ModalWindow/EditMovie';
import AddMovie from '../ModalWindow/AddMovie';
import CloseIcon from '../../assets/images/close.svg';

import './ModalWindow.scss';

const ModalWindow = () => {
    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);
    const activeMovie = useSelector(({movie: {activeMovie}}) => activeMovie);

    const containerClasses = classNames({
        'modal-window-container': true,
        'active-modal-height': activeModal === 'delete'
    })

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    return activeModal && (
        <div className={containerClasses}>
            <div className="blur-filter">
                <Logo />
                <div className="modal-window-wrapper">
                    <Button
                        className="modal-window-close-btn"
                        onClick={handleCloseModal}
                    >
                        <img src={CloseIcon} alt="close" />
                    </Button>
                    <div className="modal-window-body">
                        {activeMovie && <DeleteMovie title="DELETE MOVIE" movieId={activeMovie.id} />}
                        {activeMovie && <EditMovie modalTitle="EDIT MOVIE" activeMovie={activeMovie} movie={activeMovie} /> }
                        <AddMovie modalTitle="ADD MOVIE"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;