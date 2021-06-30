import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import './MovieCard.scss';

import { openModal } from '../../store/actions';

import Button from '../../components/Button';
import MoviePoster from '../../components/MoviePoster';
import MovieTitle from '../../components/MovieTitle';
import MovieRelease from '../../components/MovieRelease';
import MovieGenres from '../../components/MovieGenres';
import ContextMenuIcon from '../../assets/images/context-menu.svg';
import ContextMenu from '../ContextMenu';

const MovieCard = ({movieData, movieData: { id, title, posterUrl, releaseDate, genres, overview, runtime } }) => {
    const [showContextMenu, setShowContextMenu] = useState(false);
    const dispatch = useDispatch();

    const onToggleMenu = () => {
        setShowContextMenu(showContextMenu => !showContextMenu);
    }

    const showDeleteModal = () => {
        dispatch(openModal('delete', movieData));
    }

    const showEditModal = () => {
        dispatch(openModal('edit', movieData));
    };

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
            <ContextMenu
                showContextMenu={showContextMenu} 
                closeContextMenu={onToggleMenu}
                showDeleteModal={showDeleteModal} 
                showEditModal={showEditModal} 
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
        genres: PropTypes.arrayOf(PropTypes.string),
        overview: PropTypes.string,
        runtime: PropTypes.number
    })
};

MovieCard.defaultProps = {
    movieData: null
};

export default MovieCard;