import React from 'react';
import renderer from 'react-test-renderer';

import Select from './index';

it('Select renders correctly', () => {
    const options = [
        { id: 1, value: 'option 1', label: 'Test option 1' },
        { id: 2, value: 'option 2', label: 'Test option 2' },
        { id: 3, value: 'option 3', label: 'Test option 3' },
    ];
    const select = renderer
        .create(<Select sortOptions={options} onSelect={() => {}}/>)
        .toJSON();
    expect(select).toMatchSnapshot();
});