import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import EditMovie from './index';
import { mockMovie } from '../../../util/constants';

it('renders addMovie form correctly', () => {
  const mockStore = configureMockStore();
  const initState = {
    movie: {
      activeModal: 'edit'
    }
  };

  const store = mockStore(initState);
  const addMovie = renderer.create(
    <Provider store={store}>
      <EditMovie modalTitle="EDIT MOVIE" movie={mockMovie} />
    </Provider>
  );

  expect(addMovie).toMatchSnapshot();
});
