import React from "react";

import HeaderTop from "../HeaderTop";
import MovieDetails from "../MovieDetails";

import './MovieDetailsContainer.scss';

const MovieDetailsContainer = () => (
    <div className="header-container details-page">
        <div className="blur-filter">
            <HeaderTop />
            <MovieDetails />
        </div>
    </div>
)

export default MovieDetailsContainer;
