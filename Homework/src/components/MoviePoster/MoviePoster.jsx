import './MoviePoster.scss';

import React from 'react';
import PropTypes from 'prop-types';

const MoviePoster = ({path, title}) => (
    <img className="movie-card-poster" src={path} alt={title} />
);

MoviePoster.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string
};

MoviePoster.defaultProps = {
    path: '',
    title: ''
}

export default MoviePoster;