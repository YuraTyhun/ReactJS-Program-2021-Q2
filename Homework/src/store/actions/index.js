import axios from 'axios';
import { buildQueryString } from '../../util';

import { BASE_URL } from '../../util/constants';

import {
    OPEN_MODAL,
    CLOSE_MODAL,
    SHOW_MOVIE_DETAILS,
    SET_SORT_BY,
    SET_FILTER,
    CLOSE_MOVIE_DETAILS,
    GET_MOVIES_SUCCESS,
    GET_MOVIE_BY_ID_SUCCESS,
    SET_SEARCH_VALUE
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

export const setSearchValue = (value) => {
    return ({
        type: SET_SEARCH_VALUE,
        payload: value
    })
}

export const getMoviesSuccess = (movies) => ({
    type: GET_MOVIES_SUCCESS,
    payload: movies
});

export const getMovieByIdSuccess = (movie) => ({
    type: GET_MOVIE_BY_ID_SUCCESS,
    payload: movie
});

export const getMovies = () => (dispatch, getState) => {
    const {filter, sortBy, search} = getState().movie;
    return axios
        .get(`${BASE_URL}${buildQueryString({filter, sortBy, search})}`)
        .then(response => {
            console.log(response);
            dispatch(getMoviesSuccess(response.data))
        })
        .catch((error) => {
            console.log(error.message);
        });
}

export const getMovieById = (id) => (dispatch) => {
    return axios
        .get(`${BASE_URL}/${id}`)
        .then(response => {
            console.log(response);
            dispatch(getMovieByIdSuccess(response.data))
        })
        .catch((error) => {
            console.log(error.message);
        });
}

export const addMovie = (data) => (dispatch) => {
    console.log(data);
    return axios
        .post(BASE_URL, data)
        .then(() => {
            dispatch(closeModal());
            dispatch(getMovies());
        })
        .catch((error) => {
            console.log(error.message);
        });
}

export const editMovie = (data) => (dispatch) => {
    console.log(data);
    return axios
        .put(BASE_URL, data)
        .then(() => {
            dispatch(closeModal());
            dispatch(getMovies());
        })
        .catch((error) => {
            console.log(error.message);
        });
}

export const deleteMovie = (id) => (dispatch) => {
    console.log(id);
    return axios
        .delete(`${BASE_URL}/${id}`)
        .then(() => {
            dispatch(closeModal());
            dispatch(getMovies());
        })
        .catch((error) => {
            console.log(error.message);
        });
}

export const updateStateFromUrlParams = urlParams => dispatch => {
    if(urlParams.get('sortBy')) dispatch( setSortBy(urlParams.get('sortBy')));
    if(urlParams.get('filter') || urlParams.get('filter') === '') dispatch( setFilter(urlParams.get('filter')));
    if(urlParams.get('search') || urlParams.get('search') === '') dispatch( setSearchValue(urlParams.get('search')));
}