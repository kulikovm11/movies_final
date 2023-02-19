const baseURL = 'https://api.themoviedb.org/3'
const posterURL = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies:'/discover/movie?page&language=ru',
    movie:'/movie',
    genres:'/genre/movie/list'
}


export {baseURL, urls, posterURL}