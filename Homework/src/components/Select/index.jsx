import React from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

const Select = ({ sortOptions, onSelect }) => (
  <div className="select-sort">
    <select onChange={onSelect}>
      {sortOptions.map((option) => (
        // PATTERN: Avoid using Index as Key for map
        <option value={option.value} key={option.id}>{option.label}</option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  sortOptions: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func
};

Select.defaultProps = {
  sortOptions: [],
  onSelect: () => {}
};

export default Select;
