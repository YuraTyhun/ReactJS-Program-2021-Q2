export const genres = [
  'Action',
  'Comedy',
  'Crime',
  'Drama',
  'Music',
  'Romance',
  'Adventure',
  'Family',
  'Fantasy',
  'Science Fiction',
  'Thriller',
  'Documentary',
  'Horror',
  'History',
  'Western'
];

export const sortByOptions = [
  { id: 1, value: 'release_date', label: 'RELEASE DATE' },
  { id: 2, value: 'runtime', label: 'RUNTIME' },
  { id: 3, value: 'vote_average', label: 'RATING' }
];

export const formInputsList = [
  {
    id: 1, label: 'TITLE', name: 'title', placeholder: 'Movie title here', type: 'text'
  },
  {
    id: 2, label: 'RELEASE DATE', name: 'release_date', placeholder: 'Select Date', type: 'date'
  },
  {
    id: 3, label: 'MOVIE URL', name: 'poster_path', placeholder: 'Movie URL here', type: 'text'
  },
  {
    id: 4, label: 'GENRE', fieldName: 'genres'
  },
  {
    id: 5, label: 'OVERVIEW', name: 'overview', placeholder: 'Overview here', type: 'text'
  },
  {
    id: 6, label: 'RUNTIME', name: 'runtime', placeholder: 'Runtime here', type: 'text'
  },
  {
    id: 7, label: 'BUDGET', name: 'budget', placeholder: 'Budget here', type: 'text'
  },
  {
    id: 8, label: 'REVENUE', name: 'revenue', placeholder: 'Revenue here', type: 'text'
  },
  {
    id: 9, label: 'TAGLINE', name: 'tagline', placeholder: 'Tagline here', type: 'text'
  },
  {
    id: 10, label: 'VOTE AVERAGE', name: 'vote_average', placeholder: 'Vote average here', type: 'text'
  },
  {
    id: 11, label: 'VOTE COUNT', name: 'vote_count', placeholder: 'Vote count here', type: 'text'
  }
];

export const BASE_URL = 'http://localhost:4000/movies';
// eslint-disable-next-line no-useless-escape
export const URL_REGEX = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/;

export const mockMovie = {
  id: 1,
  title: 'Avengers: War of Infinity',
  budget: 250000000,
  genres: ['Action', 'Adventure'],
  overview: 'Avengers: Infinity War is a 2018 American superhero film.',
  poster_path: '',
  release_date: '2018-04-28',
  revenue: 1850000000,
  runtime: 155,
  tagline: 'Tagline',
  vote_average: 8.5,
  vote_count: 175896
};
