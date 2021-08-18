import React from 'react';
import renderer from 'react-test-renderer';

import MovieGenres from './index';

it('Genres render correctly', () => {
  const mockGenres = ['Comedy', 'Action', 'Horror'];
  const genres = renderer
    .create(<MovieGenres genres={mockGenres} />)
    .toJSON();
  expect(genres).toMatchSnapshot();
});
