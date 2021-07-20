import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ResultsMenu from '../ResultsMenu';
import ResultsCount from '../ResultsCount';
import MoviesList from '../MoviesList';
import { getMovies } from '../../store/actions';

import './MainContent.scss';

const MainContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
      }, [dispatch]);

    return (
        <main className="main-content">
            <ResultsMenu />
            <ResultsCount />
            <MoviesList />
        </main>
    );
}

export default MainContent;