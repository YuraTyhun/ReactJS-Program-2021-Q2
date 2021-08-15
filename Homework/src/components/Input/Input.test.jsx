import React from 'react';
import renderer from 'react-test-renderer';

import Input from './index';

it('Input renders correctly', () => {
    const input = renderer
        .create(<Input value="test value" onChange={() => {}}/>)
        .toJSON();
    expect(input).toMatchSnapshot();
})