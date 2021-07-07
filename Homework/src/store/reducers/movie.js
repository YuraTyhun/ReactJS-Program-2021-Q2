import { 
    OPEN_MODAL, 
    CLOSE_MODAL, 
    SHOW_MOVIE_DETAILS,
    CLOSE_MOVIE_DETAILS,
    SET_SORT_BY,
    SET_FILTER
} from '../actions/actionTypes';

export const initialState = {
    activeMovie: null,
    activeModal: false,
    detailsMovie: null,
    sortBy: 'releaseDate',
    filter: '',
    movies: [
        {
            id: 1,
            title: 'Bohemian Rhapsody',
            genres: ['Drama', 'Music'],
            releaseDate: '2018-11-02',
            posterUrl: 'https://i.pinimg.com/originals/2c/31/f1/2c31f1d983b9bdfc53d3ef4633bb9c1b.jpg',
            overview: `The story of the legendary British rock band Queen and lead singer Freddie Mercury, 
                    leading up to their famous performance at Live Aid (1985).`,
            runtime: 135,
            rating: 4.5
        },
        {
            id: 2,
            title: `The Hitman's Bodyguard`,
            genres: ['Action', 'Comedy', 'Crime'],
            releaseDate: '2017-09-18',
            posterUrl: 'https://i.pinimg.com/originals/a5/2e/ab/a52eabf1f556e33c01cdf7161c3f5fd5.jpg',
            overview: `The world's top bodyguard gets a new client, a hitman who must testify at the International Criminal Court. 
                    They must put their differences aside and work together to make it to the trial on time.`,
            runtime: 108,
            rating: 4.0
        },
        {
            id: 3,
            title: 'Wrath of Man',
            genres: ['Action', 'Crime'],
            releaseDate: '2021-05-07',
            posterUrl: 'https://bloximages.chicago2.vip.townnews.com/newsbug.info/content/tncms/assets/v3/editorial/9/8e/98eb7be2-58c7-5a91-83f3-a11d8386b009/609940243eda1.image.jpg',
            overview: 'The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.',
            runtime: 105,
            rating: 4.8
        },
        {
            id: 4,
            title: 'Interstellar',
            genres: ['Drama', 'Music'],
            releaseDate: '2014-11-07',
            posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/71LNVGVpWYL._AC_SL1020_.jpg',
            overview: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
            runtime: 150,
            rating: 5.0
        },
        {
            id: 5,
            title: 'The Dark Knight',
            genres: ['Action', 'Drama', 'Crime'],
            releaseDate: '2008-07-18',
            posterUrl: 'https://originalvintagemovieposters.com/wp-content/uploads/2020/03/Dark-Knight-70822-scaled.jpg',
            overview: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, 
                    Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
            runtime: 165,
            rating: 4.9
        },
        {
            id: 6,
            title: 'Joker',
            genres: ['Drama', 'Crime'],
            releaseDate: '2019-10-04',
            posterUrl: 'https://images.ua.prom.st/2073778186_w640_h640_plakat-joker-film.jpg',
            overview: `In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. 
                    He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.`,
            runtime: 145,
            rating: 4.8
        }
    ]
};

const movie = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                activeModal: action.payload.activeModal,
                activeMovie: action.payload.activeMovie
            }
        case CLOSE_MODAL:
            return {
                ...state,
                activeModal: false,
                activeMovie: null
            };
        case SHOW_MOVIE_DETAILS:
            return {
                ...state,
                detailsMovie: action.payload
            };
        case CLOSE_MOVIE_DETAILS:
            return {
                ...state,
                detailsMovie: null
            };
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };

        default:
            return state;
    }
}

export default movie;