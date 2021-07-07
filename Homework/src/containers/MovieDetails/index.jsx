import React from "react";
import { useSelector } from "react-redux";

import MoviePoster from "../../components/MoviePoster";
import MovieGenres from "../../components/MovieGenres"; 

import './MovieDetails.scss';

const MovieDetails = () => {
    const detailsMovie = useSelector(({movie: {detailsMovie}}) => detailsMovie);
    
    return (
        <div className="movie-details-container">
            <MoviePoster path={detailsMovie.posterUrl} />
            <div className="movie-details-main">
                <div className="movie-details-header">
                    <span className="movie-details-header-title">{detailsMovie.title}</span>
                    <span className="movie-details-header-rating">{detailsMovie.rating.toFixed(1)}</span>
                </div>
                <MovieGenres genres={detailsMovie.genres}/>
                <div className="movie-details-release-and-runtime">
                    <div>{new Date(detailsMovie.releaseDate).getFullYear()}</div>
                    <div>{detailsMovie.runtime} min</div>
                </div>
                <div className="movie-details-overview">{detailsMovie.overview}</div>
            </div>
        </div>
    )
}

export default MovieDetails;