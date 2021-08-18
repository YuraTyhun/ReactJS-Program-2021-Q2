import React from 'react';

import MovieGenres from '../components/MovieGenres';

export default {
    title: 'MovieGenres',
    component: MovieGenres
};

const Template = (args) => <MovieGenres {...args}/>

export const Genres = Template.bind({});

Genres.args = {
    genres: ['Action', 'Comedy', 'Horror']
};