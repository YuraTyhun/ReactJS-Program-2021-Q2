import React from 'react';
import PropTypes from 'prop-types';

import { getYear } from '../../util';

import './MovieRelease.scss';

const MovieRelease = ({ releaseDate }) => (
  <div className="movie-release-date">{getYear(releaseDate)}</div>
);

MovieRelease.propTypes = {
  releaseDate: PropTypes.string.isRequired
};

export default MovieRelease;
