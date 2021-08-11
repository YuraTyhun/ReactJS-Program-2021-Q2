import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { mockMovie } from '../../util/constants';
import { initialState } from '../reducers/movie';
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
} from './actionTypes';
import { 
    addMovie,
    closeModal, 
    closeMovieDetails, 
    editMovie, 
    getMovieById, 
    getMovieByIdSuccess, 
    getMovies, 
    getMoviesSuccess, 
    openModal, 
    setFilter, 
    setSearchValue, 
    setSortBy, 
    showMovieDetails, 
    updateStateFromUrlParams
} from './index';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Movie actions', () => {
    it('openModal', () => {
        const expectedAction = {
            type: OPEN_MODAL,
            payload: {
                activeModal: 'add',
                activeMovie: mockMovie
            }
        };

        expect(openModal('add', mockMovie)).toEqual(expectedAction);
    });

    it('closeModal', () => {
        const expectedAction = {
            type: CLOSE_MODAL
        };

        expect(closeModal()).toEqual(expectedAction);
    });

    it('showMovieDetails', () => {
        const expectedAction = {
            type: SHOW_MOVIE_DETAILS,
            payload: mockMovie
        };

        expect(showMovieDetails(mockMovie)).toEqual(expectedAction);
    });

    it('closeMovieDetails', () => {
        const expectedAction = {
            type: CLOSE_MOVIE_DETAILS
        };

        expect(closeMovieDetails()).toEqual(expectedAction);
    });

    it('setSortBy', () => {
        const expectedAction = {
            type: SET_SORT_BY,
            payload: 'runtime'
        };

        expect(setSortBy('runtime')).toEqual(expectedAction);
    });

    it('setFilter', () => {
        const expectedAction = {
            type: SET_FILTER,
            payload: 'Action'
        };

        expect(setFilter('Action')).toEqual(expectedAction);
    });

    it('setSearchValue', () => {
        const expectedAction = {
            type: SET_SEARCH_VALUE,
            payload: 'Test movie'
        };

        expect(setSearchValue('Test movie')).toEqual(expectedAction);
    });

    it('getMoviesSuccess', () => {
        const mockResponse = {
            data: [mockMovie],
            totalAmount: 1
        }
        const expectedAction = {
            type: GET_MOVIES_SUCCESS,
            payload: {
                data: [mockMovie],
                totalAmount: 1
            }
        };

        expect(getMoviesSuccess(mockResponse)).toEqual(expectedAction);
    });

    it('getMovieByIdSuccess', () => {
        const expectedAction = {
            type: GET_MOVIE_BY_ID_SUCCESS,
            payload: mockMovie
        };

        expect(getMovieByIdSuccess(mockMovie)).toEqual(expectedAction);
    });
});

describe('Movie async actions', () => {
    const mockSuccess = {
        status: 200,
        response: [mockMovie]
    };

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall()
    });

    it('getMovies', () => {
        const initState = {
            movie: {
                ...initialState
            }
        };
        const store = mockStore(initState);
        const expectedAction = [{
            type: GET_MOVIES_SUCCESS,
            payload: {
                data: [mockMovie],
                totalAmount: 1
            }
        }];

        moxios.wait(() => {
            const req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: {
                    data: [mockMovie],
                    totalAmount: 1
                }
            });
        });

        return store.dispatch(getMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });

    it('getMovieById', () => {
        const store = mockStore(initialState);
        const expectedAction = [{
            type: GET_MOVIE_BY_ID_SUCCESS,
            payload: mockMovie
        }];

        moxios.wait(() => {
            const req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: mockMovie
            });
        });

        return store.dispatch(getMovieById(mockMovie.id)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });

    it('addMovie', () => {
        const store = mockStore(initialState);
        const expectedAction = [
            { type: CLOSE_MODAL },
        ];

        moxios.wait(() => {
            const req = moxios.requests.mostRecent();
            req.respondWith(mockSuccess);
        });

        return store.dispatch(addMovie(mockMovie)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });

    it('editMovie', () => {
        const store = mockStore(initialState);
        const expectedAction = [
            { type: CLOSE_MODAL },
        ];

        moxios.wait(() => {
            const req = moxios.requests.mostRecent();
            req.respondWith(mockSuccess);
        });

        return store.dispatch(editMovie(mockMovie)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });

    it('deleteMovie', () => {
        const store = mockStore(initialState);
        const expectedAction = [
            { type: CLOSE_MODAL },
        ];

        moxios.wait(() => {
            const req = moxios.requests.mostRecent();
            req.respondWith(mockSuccess);
        });

        return store.dispatch(editMovie(mockMovie)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });

    it('updateStateFromUrlParams', () => {
        const store = mockStore(initialState);
        const query = '?sortBy=release_date&sortOrder=desc&filter=comedy&search=Aquaman&searchBy=title&limit=30';
        const urlParams = new URLSearchParams(query);
        const expectedActions = [
            { type: SET_SORT_BY, payload: 'release_date' },
            { type: SET_FILTER, payload: 'comedy' },
            { type: SET_SEARCH_VALUE, payload: 'Aquaman' }
        ];

        store.dispatch(updateStateFromUrlParams(urlParams));
        expect(store.getActions()).toEqual(expectedActions);
    });
})