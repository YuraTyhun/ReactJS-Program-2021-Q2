import React from 'react';

import ListItem from '../../components/ListItem';

import './ResultsFilter.scss';

const genres = [
    { id: 1, value: '', title: 'ALL' },
    { id: 2, value: 'documentary', title: 'DOCUMENTARY' },
    { id: 3, value: 'comedy', title: 'COMEDY' },
    { id: 4, value: 'horror', title: 'HORROR' },
    { id: 5, value: 'crime', title: 'CRIME' }
];

const ResultsFilter = () => (
    <nav>
        <ul className="results-filter-list">
            {genres.map(genre => (
                <ListItem key={genre.id} title={genre.title} />
            ))}
        </ul>
    </nav>
);

export default ResultsFilter;
