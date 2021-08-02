import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import MoviePoster from "../../components/MoviePoster";
import MovieGenres from "../../components/MovieGenres";
import { getMovieById } from "../../store/actions";
import { getYear } from '../../util/index';

import './MovieDetails.scss';

const MovieDetails = () => {
    const detailsMovie = useSelector(({ movie: { detailsMovie } }) => detailsMovie);

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(!detailsMovie) {
            dispatch(getMovieById(id));
        }
    }, [detailsMovie, dispatch, id]);

    return detailsMovie && (
        <div className="movie-details-container">
            <MoviePoster path={detailsMovie.poster_path} />
            <div className="movie-details-main">
                <div className="movie-details-header">
                    <span className="movie-details-header-title">{detailsMovie.title}</span>
                    <span className="movie-details-header-rating">{(detailsMovie.vote_average || 0).toFixed(1)}</span>
                </div>
                <MovieGenres genres={detailsMovie.genres} />
                <div className="movie-details-release-and-runtime">
                    <div>{getYear(detailsMovie.release_date)}</div>
                    <div>{detailsMovie.runtime ? detailsMovie.runtime + 'min' : ''}</div>
                </div>
                <div className="movie-details-overview">{detailsMovie.overview}</div>
            </div>
        </div>
    )
}

export default MovieDetails;