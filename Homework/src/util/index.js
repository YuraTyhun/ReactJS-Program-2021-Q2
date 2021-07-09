export const sortList = (arr = [], sortBy) => {
    return sortBy === 'releaseDate' ?
        arr.sort((a,b) => new Date(b[sortBy]).getFullYear() - new Date(a[sortBy]).getFullYear()) :
        arr.sort((a,b) => b[sortBy] - a[sortBy]);  
}