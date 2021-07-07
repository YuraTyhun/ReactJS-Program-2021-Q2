import React from 'react';
import { useSelector } from 'react-redux';

import MovieCard from '../MovieCard';
import { sortList } from '../../util';

import './MoviesList.scss';

const MoviesList = () => {
    const filter = useSelector(({movie: {filter}}) => filter);
    const mockMovies = useSelector(({movie: {movies}}) => {
        return filter ? movies.filter(movie => movie.genres.includes(filter)) : movies
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