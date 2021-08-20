/* eslint-disable no-console */
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

export const openModal = (activeModal, activeMovie) => ({
  type: OPEN_MODAL,
  payload: { activeModal, activeMovie }
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const showMovieDetails = (movie) => ({
  type: SHOW_MOVIE_DETAILS,
  payload: movie
});

export const closeMovieDetails = () => ({
  type: CLOSE_MOVIE_DETAILS
});

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value
});

export const getMoviesSuccess = (response) => ({
  type: GET_MOVIES_SUCCESS,
  payload: {
    data: response.data,
    totalAmount: response.totalAmount
  }
});

export const getMovieByIdSuccess = (movie) => ({
  type: GET_MOVIE_BY_ID_SUCCESS,
  payload: movie
});

export const getMovies = () => (dispatch, getState) => {
  const { filter, sortBy, search } = getState().movie;
  return axios
    .get(`${BASE_URL}${buildQueryString({ filter, sortBy, search })}`)
    .then((response) => {
      dispatch(getMoviesSuccess(response.data));
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getMovieById = (id) => (dispatch) => axios
  .get(`${BASE_URL}/${id}`)
  .then((response) => {
    dispatch(getMovieByIdSuccess(response.data));
  })
  .catch((error) => {
    console.log(error.message);
  });

export const addMovie = (data) => (dispatch) => axios
  .post(BASE_URL, data)
  .then(() => {
    dispatch(closeModal());
  })
  .catch((error) => {
    console.log(error.message);
  });

export const editMovie = (data) => (dispatch) => axios
  .put(BASE_URL, data)
  .then(() => {
    dispatch(closeModal());
  })
  .catch((error) => {
    console.log(error.message);
  });

export const deleteMovie = (id) => (dispatch) => axios
  .delete(`${BASE_URL}/${id}`)
  .then(() => {
    dispatch(closeModal());
  })
  .catch((error) => {
    console.log(error.message);
  });

export const updateStateFromUrlParams = (urlParams) => (dispatch) => {
  if (urlParams.get('sortBy')) dispatch(setSortBy(urlParams.get('sortBy')));
  if (urlParams.get('filter') || urlParams.get('filter') === '') dispatch(setFilter(urlParams.get('filter')));
  if (urlParams.get('search') || urlParams.get('search') === '') dispatch(setSearchValue(urlParams.get('search')));
};
