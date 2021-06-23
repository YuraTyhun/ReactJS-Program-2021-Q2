import './MoviesList.scss';

import MovieCard from '../MovieCard';

import React from 'react';

const mockMovies = [
    {   id: 1,
        title: 'Bohemian Rhapsody', 
        genres: ['Drama', 'Music'], 
        releaseDate: '2018-11-02',
        posterUrl: 'https://i.pinimg.com/originals/2c/31/f1/2c31f1d983b9bdfc53d3ef4633bb9c1b.jpg'
    },
    {
        id: 2,
        title: `The Hitman's Bodyguard`, 
        genres: ['Action', 'Comedy', 'Crime'], 
        releaseDate: '2017-09-18',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjQ5NjA2NDg1MV5BMl5BanBnXkFtZTgwMDAzNDc4MjI@._V1_.jpg'
    },
    {
        id: 3,
        title: 'Wrath of Man', 
        genres: ['Action', 'Crime'], 
        releaseDate: '2021-05-07',
        posterUrl: 'https://bloximages.chicago2.vip.townnews.com/newsbug.info/content/tncms/assets/v3/editorial/9/8e/98eb7be2-58c7-5a91-83f3-a11d8386b009/609940243eda1.image.jpg'
    },
    {
        id: 4,
        title: 'Interstellar', 
        genres: ['Drama', 'Music'], 
        releaseDate: '2014-11-07',
        posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/71LNVGVpWYL._AC_SL1020_.jpg'
    },
    {
        id: 5,
        title: 'The Dark Knight', 
        genres: ['Action', 'Drama', 'Crime'], 
        releaseDate: '2008-07-18',
        posterUrl: 'https://originalvintagemovieposters.com/wp-content/uploads/2020/03/Dark-Knight-70822-scaled.jpg'
    },
    {
        id: 6,
        title: 'Joker', 
        genres: ['Drama', 'Crime'], 
        releaseDate: '2019-10-04',
        posterUrl: 'https://images.ua.prom.st/2073778186_w640_h640_plakat-joker-film.jpg'
    }
]

const MoviesList = () => (
    <div className="movies-list-container">
        {mockMovies.map(movieItem => (
            <MovieCard movieData={movieItem} key={movieItem.id}/>
        ))}
    </div>
);

export default MoviesList;