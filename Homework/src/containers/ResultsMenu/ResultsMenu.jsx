import './ResultsMenu.scss';
import ResultsFilter from '../ResultsFilter';
import ResultsSort from '../ResultsSort';

import React from 'react';

const ResultsMenu = () => (
    <div className="results-menu-container">
        <ResultsFilter />
        <ResultsSort />
    </div>
);

export default ResultsMenu;