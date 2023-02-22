const baseURL = 'https://api.themoviedb.org/3'
const posterURL = 'https://image.tmdb.org/t/p/w500'
const APIKey = '3d9965bbb44cf56ae6990de438a7e949'

const urls = {
    movies:'/discover/movie?page&language=ru',
    movie:'/movie',
    genres:'/genre/movie/list',
    search:`/search/movie?api_key=${APIKey}`,





}


export {baseURL, urls, posterURL, APIKey}