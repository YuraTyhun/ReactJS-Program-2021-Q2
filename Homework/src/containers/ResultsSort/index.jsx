import React from 'react';
import { useDispatch } from 'react-redux';

import Select from '../../components/Select';
import { setSortBy } from '../../store/actions';
import { sortBy } from '../../util/constants';

import './ResultsSort.scss';

const ResultsSort = () => {
    const dispatch = useDispatch();

    const onSelect = e => {
        dispatch(setSortBy(e.target.value))
        console.log(e.target.value);
    }

    return (
        <div className="results-sort-container">
            <div className="sortby-label">SORT BY</div>
            <Select onSelect={onSelect} sortOptions={sortBy} />
        </div>
    );
}

export default ResultsSort;