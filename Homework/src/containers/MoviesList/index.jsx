import React from 'react';

import './MoviesList.scss';

import MovieCard from '../MovieCard';
import { useSelector } from 'react-redux';

const MoviesList = () => {
    const mockMovies = useSelector(state => state.movie.movies);
    const activeModal = useSelector(state => state.movie.activeModal);

    return !activeModal && (
        <div className="movies-list-container">
            {mockMovies.map(movieItem => (
                <MovieCard movieData={movieItem} key={movieItem.id} />
            ))}
        </div>
    );
}

export default MoviesList;