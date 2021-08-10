import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import DeleteMovie from './index';

it('renders deleteMovie form correctly', () => {
    const mockStore = configureMockStore();
    const initState = {
        movie: {
            activeModal: 'delete'
        }
    };
    
    const store = mockStore(initState);
    const deleteMovie = renderer.create(
        <Provider store={store}>
            <DeleteMovie title="DELETE MOVIE" movieId="5"/>
        </Provider>
    ).toJSON();

    expect(deleteMovie).toMatchSnapshot();

});