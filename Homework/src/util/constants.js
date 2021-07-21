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

export const sortBy = [
    { id: 1, value: 'release_date', label: 'RELEASE DATE' },
    { id: 2, value: 'runtime', label: 'RUNTIME' },
    { id: 3, value: 'vote_average', label: 'RATING' },
];

export const formInputsList = [
    { id: 1, label: "TITLE", name: "title", placeholder: "Movie title here" },
    { id: 2, label: "RELEASE DATE", name: "release_date", placeholder: "Select Date", type: "date" },
    { id: 3, label: "MOVIE URL", name: "poster_path", placeholder: "Movie URL here" },
    { id: 4, label: "GENRE", fieldName: "genres" },
    { id: 5, label: "OVERVIEW", name: "overview", placeholder: "Overview here" },
    { id: 6, label: "RUNTIME", name: "runtime", placeholder: "Runtime here" },
    { id: 7, label: "BUDGET", name: "budget", placeholder: "Budget here" },
    { id: 8, label: "REVENUE", name: "revenue", placeholder: "Revenue here" },
    { id: 9, label: "TAGLINE", name: "tagline", placeholder: "Tagline here" },
    { id: 10, label: "VOTE AVERAGE", name: "vote_average", placeholder: "Vote average here" },
    { id: 11, label: "VOTE COUNT", name: "vote_count", placeholder: "Vote count here" }
];

export const BASE_URL = 'http://localhost:4000/movies';