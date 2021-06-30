import * as actionTypes from './actionTypes';

export const openModal = (activeModal, activeMovie) => {
    return ({
        type: actionTypes.OPEN_MODAL,
        payload: {activeModal, activeMovie}
    })
}

export const closeModal = () => {
    return ({
        type: actionTypes.CLOSE_MODAL
    })
}