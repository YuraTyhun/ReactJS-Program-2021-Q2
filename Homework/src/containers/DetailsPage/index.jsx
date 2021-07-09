import React from "react";
import { useSelector } from "react-redux";

import HeaderTop from "../HeaderTop";
import MovieDetails from "../MovieDetails";

import './DetailsPage.scss';

const DetailsPage = () => {
    const detailsMovie = useSelector(({movie: {detailsMovie}}) => detailsMovie);

    return detailsMovie && (
        <div className="header-container details-page">
            <div className="blur-filter">
                <HeaderTop />
                <MovieDetails />
            </div>
        </div>
    )
}

export default DetailsPage;
