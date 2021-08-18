import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from './index';

it('Filter item renders correctly', () => {
  const filterItem = renderer
    .create(<ListItem title="Comedy" isActive setFilter={() => {}} />)
    .toJSON();
  expect(filterItem).toMatchSnapshot();
});
