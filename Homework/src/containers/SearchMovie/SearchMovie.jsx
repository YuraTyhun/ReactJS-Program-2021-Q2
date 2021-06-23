import './Search.scss';
import Button from '../../components/Button';
import Input from '../../components/Input';

import React from 'react';

const SearchMovie = () => (
    <div className="search-movie-container">
        <Input />
        <Button className="search-movie-btn" title="SEARCH"/>
    </div>
);

export default SearchMovie;