import React from 'react';
import { useSelector } from 'react-redux';

import './NoMoviesFound.scss';

const NoMoviesFound = () => {
    const totalAmount = useSelector(({movie: {totalAmount}}) => totalAmount);
    
    return !totalAmount && (
        <div className="no-movies-found-container">
            <h1 className="no-movies-found-title">No Movies Found</h1>
        </div>
    );
}

export default NoMoviesFound;