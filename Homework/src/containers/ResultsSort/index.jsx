import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import Select from '../../components/Select';
import { setSortBy } from '../../store/actions';
import { buildQueryString } from '../../util';
import { sortBy } from '../../util/constants';

import './ResultsSort.scss';

const ResultsSort = () => {
    const query = useSelector(({ movie: { sortBy, filter, search } }) => ({sortBy, filter, search}));
    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSelect = e => {
        id 
            ? dispatch(setSortBy(e.target.value))
            : history.push({
                pathname: '/search',
                search: buildQueryString({...query, sortBy: e.target.value})
            });
    }

    return (
        <div className="results-sort-container">
            <div className="sortby-label">SORT BY</div>
            <Select onSelect={onSelect} sortOptions={sortBy} />
        </div>
    );
}

export default ResultsSort;