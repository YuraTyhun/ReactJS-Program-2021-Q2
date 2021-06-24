import React from 'react';

import './ResultsMenu.scss';

import ResultsFilter from '../ResultsFilter';
import ResultsSort from '../ResultsSort';

const ResultsMenu = () => (
    <div className="results-menu-container">
        <ResultsFilter />
        <ResultsSort />
    </div>
);

export default ResultsMenu;