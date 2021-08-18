import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import MoviePoster from '../../components/MoviePoster';
import MovieGenres from '../../components/MovieGenres';
import { getMovieById } from '../../store/actions';
import { getYear, formatRating, formatRuntime } from '../../util/index';

import './MovieDetails.scss';

const MovieDetails = () => {
  const activeDetailsMovie = useSelector(({ movie: { detailsMovie } }) => detailsMovie);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!activeDetailsMovie) {
      dispatch(getMovieById(id));
    }
  }, [activeDetailsMovie, dispatch, id]);

  return activeDetailsMovie && (
  <div className="movie-details-container">
    <MoviePoster path={activeDetailsMovie.poster_path} />
    <div className="movie-details-main">
      <div className="movie-details-header">
        <span className="movie-details-header-title">{activeDetailsMovie.title}</span>
        <span className="movie-details-header-rating">{formatRating(activeDetailsMovie.vote_average)}</span>
      </div>
      <MovieGenres genres={activeDetailsMovie.genres} />
      <div className="movie-details-release-and-runtime">
        <div>{getYear(activeDetailsMovie.release_date)}</div>
        <div>{formatRuntime(activeDetailsMovie.runtime)}</div>
      </div>
      <div className="movie-details-overview">{activeDetailsMovie.overview}</div>
    </div>
  </div>
  );
};

export default MovieDetails;
