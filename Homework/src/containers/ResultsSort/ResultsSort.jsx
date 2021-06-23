import './ResultsSort.scss';

import React from 'react';

import Select from '../../components/Select';

const sortBy = [
    {id: 1, value: 'release_date', label: 'RELEASE DATE'},
    {id: 2, value: 'title', label: 'TITLE'},
    {id: 3, value: 'runtime', label: 'RUNTIME'},
    {id: 4, value: 'rating', label: 'RATING'},
    {id: 5, value: 'votes', label: 'VOTES'},
  ];

const onSelect = e => {
    console.log(e);
}

const ResultsSort = () => (
    <div className="results-sort-container">
        <div className="sortby-label">SORT BY</div>
        <Select onSelect={onSelect} sortOptions={sortBy}/>
    </div>
);

export default ResultsSort;