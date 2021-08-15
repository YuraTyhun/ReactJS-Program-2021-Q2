import movie, { initialState } from "./movie";
import { mockMovie } from "../../util/constants";
import { 
    CLOSE_MODAL, 
    CLOSE_MOVIE_DETAILS, 
    GET_MOVIES_SUCCESS, 
    GET_MOVIE_BY_ID_SUCCESS, 
    OPEN_MODAL, 
    SET_FILTER, 
    SET_SEARCH_VALUE, 
    SET_SORT_BY, 
    SHOW_MOVIE_DETAILS,
} from '../actions/actionTypes';

describe('Movie reducer', () => {
    it('OPEN_MODAL', () => {
        const action = {
            type: OPEN_MODAL,
            payload: {
                activeModal: 'add',
                activeMovie: mockMovie
            }
        };

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            activeModal: action.payload.activeModal,
            activeMovie: action.payload.activeMovie
        });
    });

    it('CLOSE_MODAL', () => {
        const action = {
            type: CLOSE_MODAL,
        };

        const beforeTestState = {
            ...initialState,
            activeModal: true,
            activeMovie: mockMovie
        };

        expect(movie(beforeTestState, action)).toEqual({
            ...initialState,
        });
    });

    it('SHOW_MOVIE_DETAILS', () => {
        const action = {
            type: SHOW_MOVIE_DETAILS,
            payload: mockMovie
        };

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            detailsMovie: action.payload
        });
    });

    it('CLOSE_MOVIE_DETAILS', () => {
        const action = {
            type: CLOSE_MOVIE_DETAILS
        };

        const beforeTestState = {
            ...initialState,
            detailsMovie: mockMovie
        };

        expect(movie(beforeTestState, action)).toEqual({
            ...initialState
        });
    });

    it('SET_SORT_BY', () => {
        const action = {
            type: SET_SORT_BY,
            payload: 'runtime'
        };

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            sortBy: action.payload
        });
    });

    it('SET_FILTER', () => {
        const action = {
            type: SET_FILTER,
            payload: 'Action'
        };

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            filter: action.payload
        });
    });

    it('SET_SEARCH_VALUE', () => {
        const action = {
            type: SET_SEARCH_VALUE,
            payload: 'Test movie'
        };

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            search: action.payload
        });
    });

    it('GET_MOVIES_SUCCESS', () => {
        const action = {
            type: GET_MOVIES_SUCCESS,
            payload: {
                data: [mockMovie],
                totalAmount: 10
            }
        };

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            movies: action.payload.data,
            totalAmount: action.payload.totalAmount
        });
    });

    it('GET_MOVIE_BY_ID_SUCCESS', () => {
        const action = {
            type: GET_MOVIE_BY_ID_SUCCESS,
            payload: mockMovie
        };

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            detailsMovie: action.payload
        });
    });
})