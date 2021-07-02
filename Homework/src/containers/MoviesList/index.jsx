import React from 'react';
import { useSelector } from 'react-redux';

import MovieCard from '../MovieCard';

import './MoviesList.scss';

const MoviesList = () => {
    const mockMovies = useSelector(({movie: {movies}}) => movies);
    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);

    return !activeModal && (
        <div className="movies-list-container">
            {mockMovies.map(movieItem => (
                <MovieCard movieData={movieItem} key={movieItem.id} />
            ))}
        </div>
    );
}

export default MoviesList;