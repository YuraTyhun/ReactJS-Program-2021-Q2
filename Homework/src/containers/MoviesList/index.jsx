import React from 'react';
import { useSelector } from 'react-redux';

import MovieCard from '../MovieCard';
import { sortList } from '../../util';

import './MoviesList.scss';

const MoviesList = () => {
    const activefilter = useSelector(({movie: {filter}}) => filter);
    const mockMovies = useSelector(({movie: {movies}}) => {
        return activefilter ? movies.filter(({genres}) => genres.includes(activefilter)) : movies
    });
    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);
    const sortBy = useSelector(({movie: {sortBy}}) => sortBy);
    
    const sortedMockMovies = sortList(mockMovies, sortBy);
    
    return !activeModal && (
        <div className="movies-list-container">
            {sortedMockMovies.map(movieItem => (
                <MovieCard movieData={movieItem} key={movieItem.id} />
            ))}
        </div>
    );
}

export default MoviesList;