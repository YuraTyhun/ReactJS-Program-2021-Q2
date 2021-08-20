import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';

it('Button renders correctly', () => {
  const button = renderer
    .create(<Button title="Save" className="btn-test" iconSrc="''" iconAlt="Close" />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
