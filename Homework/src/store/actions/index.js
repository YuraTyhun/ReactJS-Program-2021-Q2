import axios from 'axios';

import { BASE_URL } from '../../util/constants';

import {
    OPEN_MODAL,
    CLOSE_MODAL,
    SHOW_MOVIE_DETAILS,
    SET_SORT_BY,
    SET_FILTER,
    CLOSE_MOVIE_DETAILS,
    GET_MOVIES_SUCCESS
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

export const getMoviesSuccess = (movies) => ({
    type: GET_MOVIES_SUCCESS,
    payload: movies
});

export const getMovies = () => (dispatch) => {
    return axios
        .get('http://localhost:4000/movies?filter=&limit=30&sortBy=release_date&sortOrder=desc&search=&searchBy=title')
        .then(response => {
            console.log(response);
            dispatch(getMoviesSuccess(response.data))
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