import React from 'react';
import PropTypes from 'prop-types';

import { handleImgError } from '../../util';

import './MoviePoster.scss';

const MoviePoster = ({ path, title }) => (
  <img className="movie-card-poster" onError={handleImgError} src={path} alt={title} />
);

MoviePoster.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string
};

MoviePoster.defaultProps = {
  title: ''
};

export default MoviePoster;
