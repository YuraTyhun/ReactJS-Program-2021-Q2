import React from 'react';

const MoviePoster = ({ path, title, width, height, resize }) => (
    <img 
        style={{
            width: width,
            height: height,
            objectFit: resize
        }} 
        width={width} 
        src={path} 
        alt={title} 
    />
  );

export default {
    title: 'MoviePoster',
    component: MoviePoster,
    argTypes: {
        resize: {
            options: ['fill', 'contain', 'cover', 'scale-down', 'none'],
            control: {
                type: 'select'
            }
        }
    }
};

const Template = (args) => <MoviePoster {...args}/>

export const Poster = Template.bind({});

Poster.args = {
    path: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
    title: 'Avengers',
    width: 350,
    height: 420,
    resize: 'cover'
};