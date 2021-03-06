import React from 'react';
import PropTypes from 'prop-types';

import './MovieTitle.scss';

const MovieTitle = ({ title }) => (
  <div className="movie-title">{title}</div>
);

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default MovieTitle;
