import React from "react";
import { useSelector } from "react-redux";

import MoviePoster from "../../components/MoviePoster";
import MovieGenres from "../../components/MovieGenres";

import './MovieDetails.scss';

const MovieDetails = () => {
    const { 
        poster_path,
        title,
        vote_average,
        genres,
        release_date,
        runtime,
        overview 
    } = useSelector(({ movie: { detailsMovie } }) => detailsMovie);

    const releaseDate = new Date(release_date).getFullYear();

    return (
        <div className="movie-details-container">
            <MoviePoster path={poster_path} />
            <div className="movie-details-main">
                <div className="movie-details-header">
                    <span className="movie-details-header-title">{title}</span>
                    <span className="movie-details-header-rating">{(vote_average || 0).toFixed(1)}</span>
                </div>
                <MovieGenres genres={genres} />
                <div className="movie-details-release-and-runtime">
                    <div>{releaseDate}</div>
                    <div>{runtime ? runtime + 'min' : ''}</div>
                </div>
                <div className="movie-details-overview">{overview}</div>
            </div>
        </div>
    )
}

export default MovieDetails;