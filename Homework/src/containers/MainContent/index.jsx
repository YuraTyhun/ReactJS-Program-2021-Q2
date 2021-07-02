import React from 'react';

import ResultsMenu from '../ResultsMenu';
import ResultsCount from '../ResultsCount';
import MoviesList from '../MoviesList';

import './MainContent.scss';

const MainContent = () => (
    <main className="main-content">
        <ResultsMenu />
        <ResultsCount />
        <MoviesList />
    </main>
);

export default MainContent;