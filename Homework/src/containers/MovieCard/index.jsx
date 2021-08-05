import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import { openModal, showMovieDetails } from '../../store/actions';

import Button from '../../components/Button';
import MoviePoster from '../../components/MoviePoster';
import MovieTitle from '../../components/MovieTitle';
import MovieRelease from '../../components/MovieRelease';
import MovieGenres from '../../components/MovieGenres';
import ContextMenuIcon from '../../assets/images/context-menu.svg';
import ContextMenu from '../../components/ContextMenu';

import './MovieCard.scss';

const MovieCard = ({movieData, movieData: { id, title, poster_path, release_date, genres } }) => {
    const [showContextMenu, setShowContextMenu] = useState(false);
    const dispatch = useDispatch();

    const onToggleMenu = () => {
        setShowContextMenu(showContextMenu => !showContextMenu);
    }

    const handleShowMovieDetails = useCallback(() => {
        dispatch(showMovieDetails(movieData));
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [dispatch, movieData]);

    const showModal = (action) => {
        dispatch(openModal(action, movieData));
    };

    const handleMouseLeave = () => {
        setShowContextMenu(false);
    }

    return (
        <div className="movie-card-container" onMouseLeave={handleMouseLeave}>
            <Link to={`/film/${id}`} className='movie-card-poster-btn' onClick={handleShowMovieDetails}>
                <MoviePoster path={poster_path} title={title} />
            </Link>
            <div className="movie-card-metadata">
                <MovieTitle title={title} />
                <MovieRelease releaseDate={release_date} />
            </div>
            <MovieGenres genres={genres} />
            <Button 
                className="movie-card-menu-icon" 
                onClick={onToggleMenu}
                iconSrc={ContextMenuIcon}
                iconAlt="context menu" />
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
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string)
    })
};

MovieCard.defaultProps = {
    movieData: null
};

export default MovieCard;