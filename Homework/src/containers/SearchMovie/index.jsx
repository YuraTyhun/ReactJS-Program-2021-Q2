import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import {useSelector} from 'react-redux';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { buildQueryString } from '../../util';

import './Search.scss';

const SearchMovie = () => {
    const history = useHistory();
    const location = useLocation();
    const query = useSelector(({ movie: { sortBy, filter, search } }) => ({sortBy, filter, search}))
    const searchParams = new URLSearchParams(location.search);
    const [value, setValue] = useState(searchParams.get('search') || '')

    const onHandleClick = () => {
        history.push({
            pathname: '/search',
            search: buildQueryString({...query, search: value})
        });
    }

    const onHandleChange = (e) => setValue(e.target.value);

    return (
        <div className="search-movie-container">
            <Input 
                value={value}
                onChange={onHandleChange} />
            <Button 
                className="search-movie-btn" 
                title="SEARCH"
                onClick={onHandleClick} />
        </div>
    );
}

export default SearchMovie;