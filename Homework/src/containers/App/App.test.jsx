import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  test('renders App', () => {
    const appComponent = renderer.create(<App />).toJSON();
    expect(appComponent).toMatchSnapshot();
  });
})

