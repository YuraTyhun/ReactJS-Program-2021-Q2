import emptyImage from '../assets/images/noimg.jpg';

export const sortList = (arr = [], sortBy) => {
    return sortBy === 'release_date' ?
        arr.sort((a,b) => getYear(b[sortBy]) - getYear(a[sortBy])) :
        arr.sort((a,b) => b[sortBy] - a[sortBy]);  
}

export const handleImgError = (event) => {
    event.target.src = emptyImage;
}

export const convertData = (movie) => {
    return {
        poster_path: movie.poster_path || emptyImage,
        runtime: Number(movie.runtime),
        budget: Number(movie.budget),
        revenue: Number(movie.revenue),
        vote_average: Number(movie.vote_average),
        vote_count: Number(movie.vote_count)
    }
}

const getYear = (date) => new Date(date).getFullYear(); 