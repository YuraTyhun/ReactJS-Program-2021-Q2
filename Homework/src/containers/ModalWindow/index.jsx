import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../../store/actions';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import DeleteMovie from '../ModalWindow/DeleteMovie';
import EditMovie from '../ModalWindow/EditMovie';
import AddMovie from '../ModalWindow/AddMovie';
import CloseIcon from '../../assets/images/close.svg';

import './ModalWindow.scss';


const ModalWindow = () => {
    const activeModal = useSelector((state) => state.movie.activeModal);
    const activeMovie = useSelector((state) => state.movie.activeMovie);

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal());
    }

    return activeModal && (
        <div className="modal-window-container" style={{height: activeModal === 'delete' ? '100vh' : 'unset'}}>
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