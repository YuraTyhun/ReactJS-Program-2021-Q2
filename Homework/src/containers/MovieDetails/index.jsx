import React from "react";
import { useSelector } from "react-redux";

import MoviePoster from "../../components/MoviePoster";
import MovieGenres from "../../components/MovieGenres";

import './MovieDetails.scss';

const MovieDetails = () => {
    const { 
        posterUrl,
        title,
        rating,
        genres,
        releaseDate,
        runtime,
        overview 
    } = useSelector(({ movie: { detailsMovie } }) => detailsMovie);

    return (
        <div className="movie-details-container">
            <MoviePoster path={posterUrl} />
            <div className="movie-details-main">
                <div className="movie-details-header">
                    <span className="movie-details-header-title">{title}</span>
                    <span className="movie-details-header-rating">{rating.toFixed(1)}</span>
                </div>
                <MovieGenres genres={genres} />
                <div className="movie-details-release-and-runtime">
                    <div>{new Date(releaseDate).getFullYear()}</div>
                    <div>{runtime} min</div>
                </div>
                <div className="movie-details-overview">{overview}</div>
            </div>
        </div>
    )
}

export default MovieDetails;