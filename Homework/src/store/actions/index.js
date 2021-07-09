import { 
    OPEN_MODAL, 
    CLOSE_MODAL, 
    SHOW_MOVIE_DETAILS, 
    SET_SORT_BY,
    SET_FILTER,
    CLOSE_MOVIE_DETAILS 
} from './actionTypes';

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

export const showMovieDetails = (movie) => {
    return ({
        type: SHOW_MOVIE_DETAILS,
        payload: movie
    })
}

export const closeMovieDetails = () => {
    return ({
        type: CLOSE_MOVIE_DETAILS
    })
}

export const setSortBy = (sortBy) => {
    return ({
        type: SET_SORT_BY,
        payload: sortBy
    })
}

export const setFilter = (filter) => {
    return ({
        type: SET_FILTER,
        payload: filter
    })
}