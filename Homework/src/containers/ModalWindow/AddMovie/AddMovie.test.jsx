import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import AddMovie from './index';

it('renders addMovie form correctly', () => {
    const mockStore = configureMockStore();
    const initState = {
        movie: {
            activeModal: 'add'
        }
    };
    
    const store = mockStore(initState);
    const addMovie = renderer.create(
        <Provider store={store}>
            <AddMovie modalTitle="ADD MOVIE"/>
        </Provider>
    ).toJSON();

    expect(addMovie).toMatchSnapshot();

});