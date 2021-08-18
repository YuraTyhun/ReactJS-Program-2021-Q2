import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ onChange }) => (
  <input
    type="text"
    className="search-input-field"
    placeholder="What do you want to watch?"
    onChange={onChange}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Input;
