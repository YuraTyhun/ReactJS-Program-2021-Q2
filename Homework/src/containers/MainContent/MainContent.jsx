import './MainContent.scss';

import ResultsMenu from '../ResultsMenu';
import ResultsCount from '../ResultsCount';
import MoviesList from '../MoviesList';

import React from 'react';

const MainContent = () => (
    <main className="main-content">
        <ResultsMenu />
        <ResultsCount />
        <MoviesList />
    </main>
);

export default MainContent;