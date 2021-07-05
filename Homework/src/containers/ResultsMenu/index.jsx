import React from 'react';

import ResultsFilter from '../ResultsFilter';
import ResultsSort from '../ResultsSort';

import './ResultsMenu.scss';

const ResultsMenu = () => (
    <div className="results-menu-container">
        <ResultsFilter />
        <ResultsSort />
    </div>
);

export default ResultsMenu;