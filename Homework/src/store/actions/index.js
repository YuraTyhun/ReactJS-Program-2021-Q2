import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

export const openModal = (activeModal, activeMovie) => {
    return ({
        type: OPEN_MODAL,
        payload: { activeModal, activeMovie }
    })
}

export const closeModal = () => {
    return ({
        type: CLOSE_MODAL
    })
}