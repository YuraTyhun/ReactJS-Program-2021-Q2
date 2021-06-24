import React from 'react';

import './Search.scss';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SearchMovie = () => (
    <div className="search-movie-container">
        <Input />
        <Button className="search-movie-btn" title="SEARCH" />
    </div>
);

export default SearchMovie;