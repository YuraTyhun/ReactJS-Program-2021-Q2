import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { setFilter } from '../../store/actions';
import ListItem from '../../components/ListItem';

import './ResultsFilter.scss';

const genres = [
    { id: 1, value: '', title: 'ALL' },
    { id: 2, value: 'Action', title: 'ACTION' },
    { id: 3, value: 'Comedy', title: 'COMEDY' },
    { id: 4, value: 'Horror', title: 'HORROR' },
    { id: 5, value: 'Crime', title: 'CRIME' },
    { id: 6, value: 'Drama', title: 'DRAMA' }
];

const ResultsFilter = () => {
    const filter = useSelector(({movie: {filter}}) => filter);
    const dispatch = useDispatch();

    const handleSetFilter = (filter) => {
        dispatch(setFilter(filter));
    }

    return (
        <nav>
            <ul className="results-filter-list">
                {genres.map(genre => (
                    <ListItem 
                        key={genre.id} 
                        title={genre.title}
                        isActive={genre.value === filter} 
                        setFilter={() => handleSetFilter(genre.value)}/>
                ))}
            </ul>
        </nav>
    );
}

export default ResultsFilter;
