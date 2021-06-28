import React from 'react';
import PropTypes from 'prop-types';

import './MovieGenres.scss';

const MovieGenres = ({ genres }) => (
    <div className="movie-genres">{genres.join(', ')}</div>
);

MovieGenres.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieGenres;