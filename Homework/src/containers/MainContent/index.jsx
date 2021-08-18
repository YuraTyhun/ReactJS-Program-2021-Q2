import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import ResultsMenu from '../../components/ResultsMenu';
import ResultsCount from '../../components/ResultsCount';
import MoviesList from '../MoviesList';
import NoMoviesFound from '../../components/NoMovieFound';
import { getMovies, updateStateFromUrlParams } from '../../store/actions';

import './MainContent.scss';

const MainContent = () => {
  const activeModalWindow = useSelector(({ movie: { activeModal } }) => activeModal);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const filter = searchParams.get('filter');
  const sortBy = searchParams.get('sortBy');
  const search = searchParams.get('search');

  useEffect(() => {
    dispatch(updateStateFromUrlParams(searchParams));
    dispatch(getMovies());
  }, [dispatch, filter, sortBy, search, searchParams]);

  return !activeModalWindow && (
  <main className="main-content">
    <ResultsMenu />
    <ResultsCount />
    <MoviesList />
    <NoMoviesFound />
  </main>
  );
};

export default MainContent;
