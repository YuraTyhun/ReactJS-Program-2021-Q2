import './MovieCard.scss';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import MoviePoster from '../../components/MoviePoster';
import MovieTitle from '../../components/MovieTitle';
import MovieRelease from '../../components/MovieRelease';
import MovieGenres from '../../components/MovieGenres';
import ContextMenuIcon from '../../assets/context-menu.svg';
import ContextMenu from '../ContextMenu';

import React, { useState } from 'react';

const MovieCard = ({ movieData: { title, posterUrl, releaseDate, genres } }) => {
    const [showContextMenu, setShowContextMenu] = useState(false);

    const onShowMenu = () => {
        setShowContextMenu(true);
    }

    const onCloseMenu = () => {
        setShowContextMenu(false);
    }

    return (
        <div className="movie-card-container" onMouseLeave={onCloseMenu}>
            <Button>
                <MoviePoster path={posterUrl} title={title} />
            </Button>
            <div className="movie-card-metadata">
                <MovieTitle title={title} />
                <MovieRelease releaseDate={releaseDate} />
            </div>
            <MovieGenres genres={genres} />
            <Button className="movie-card-menu-icon" onClick={onShowMenu}>
                <img src={ContextMenuIcon} alt="context menu" />
            </Button>
            <ContextMenu showContextMenu={showContextMenu} closeContextMenu={onCloseMenu} />
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