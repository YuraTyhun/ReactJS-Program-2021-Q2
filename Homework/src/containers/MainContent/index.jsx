import React from 'react';

import './MainContent.scss';

import ResultsMenu from '../ResultsMenu';
import ResultsCount from '../ResultsCount';
import MoviesList from '../MoviesList';

const MainContent = () => (
    <main className="main-content">
        <ResultsMenu />
        <ResultsCount />
        <MoviesList />
    </main>
);

export default MainContent;