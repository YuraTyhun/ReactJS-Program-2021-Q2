import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import { openModal, showMovieDetails } from '../../store/actions';

import Button from '../../components/Button';
import MoviePoster from '../../components/MoviePoster';
import MovieTitle from '../../components/MovieTitle';
import MovieRelease from '../../components/MovieRelease';
import MovieGenres from '../../components/MovieGenres';
import ContextMenuIcon from '../../assets/images/context-menu.svg';
import ContextMenu from '../ContextMenu';

import './MovieCard.scss';

const MovieCard = ({movieData, movieData: { title, posterUrl, releaseDate, genres } }) => {
    const [showContextMenu, setShowContextMenu] = useState(false);
    const dispatch = useDispatch();

    const onToggleMenu = () => {
        setShowContextMenu(showContextMenu => !showContextMenu);
    }

    const handleShowMovieDetails = useCallback(() => {
        dispatch(showMovieDetails(movieData));
        window.scrollTo(0, 0);
    }, [dispatch, movieData]);

    const showModal = (action) => {
        dispatch(openModal(action, movieData));
    };

    return (
        <div className="movie-card-container" onMouseLeave={() => setShowContextMenu(false)}>
            <Button className='movie-card-poster-btn' onClick={handleShowMovieDetails}>
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
            <ContextMenu
                showContextMenu={showContextMenu} 
                closeContextMenu={onToggleMenu}
                showModal={showModal} 
            />
        </div>
    );
}

MovieCard.propTypes = {
    movieData: PropTypes.shape({
        id: PropTypes.number,
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