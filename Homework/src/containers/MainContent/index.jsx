import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ResultsMenu from '../../components/ResultsMenu';
import ResultsCount from '../../components/ResultsCount';
import MoviesList from '../MoviesList';
import NoMoviesFound from '../../components/NoMovieFound';
import { getMovies, updateStateFromUrlParams } from '../../store/actions';

import './MainContent.scss';
import { useLocation } from 'react-router';

const MainContent = () => {
    const activeModal = useSelector(({movie: {activeModal}}) => activeModal);
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const filter = searchParams.get('filter'),
          sortBy = searchParams.get('sortBy'),
          search = searchParams.get('search');

    useEffect(() => {
        dispatch(updateStateFromUrlParams(searchParams));
        dispatch(getMovies());
      }, [dispatch, filter, sortBy, search, searchParams]);

    return !activeModal && (
        <main className="main-content">
            <ResultsMenu />
            <ResultsCount />
            <MoviesList />
            <NoMoviesFound />
        </main>
    );
}

export default MainContent;