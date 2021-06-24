import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

import Button from '../../components/Button';
import MoviePoster from '../../components/MoviePoster';
import MovieTitle from '../../components/MovieTitle';
import MovieRelease from '../../components/MovieRelease';
import MovieGenres from '../../components/MovieGenres';
import ContextMenuIcon from '../../assets/images/context-menu.svg';
import ContextMenu from '../ContextMenu';

const MovieCard = ({ movieData: { title, posterUrl, releaseDate, genres } }) => {
    const [showContextMenu, setShowContextMenu] = useState(false);

    const onToggleMenu = () => {
        setShowContextMenu(showContextMenu => !showContextMenu);
    }

    return (
        <div className="movie-card-container" onMouseLeave={() => setShowContextMenu(false)}>
            <Button className='movie-card-poster-btn'>
                <MoviePoster path={posterUrl} title={title} />
            </Button>
            <div className="movie-card-metadata">
                <MovieTitle title={title} />
                <MovieRelease releaseDate={releaseDate} />
            </div>
            <MovieGenres genres={genres} />
            <Button className="movie-card-menu-icon" onClick={onToggleMenu}>
                <img src={ContextMenuIcon} alt="context menu" />
            </Button>
            <ContextMenu showContextMenu={showContextMenu} closeContextMenu={onToggleMenu} />
        </div>
    );
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
        title: PropTypes.string,
        posterUrl: PropTypes.string,
        releaseDate: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string)
    })
};

MovieCard.defaultProps = {
    movieData: null
};

export default MovieCard;