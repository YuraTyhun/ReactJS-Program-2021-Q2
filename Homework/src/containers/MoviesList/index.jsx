import React from 'react';
import { useSelector } from 'react-redux';

import MovieCard from '../MovieCard';

import './MoviesList.scss';

const MoviesList = () => {
  const fetchedMovies = useSelector(({ movie: { movies } }) => movies);

  return (
    <div className="movies-list-container">
      {fetchedMovies.map((movieItem) => (
        // PATTERN: Avoid using Index as Key for map
        <MovieCard movieData={movieItem} key={movieItem.id} />
      ))}
    </div>
  );
};

export default MoviesList;
