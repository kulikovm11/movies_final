import {apiService} from "./apiService";
import {APIKey, urls} from "../configs/urls";


const movieService = {
   getAll:(page=1)=>apiService.get(urls.movies, {params:{page}}),
    getById:(id)=>apiService.get(`${urls.movie}/${id}?api_key=${APIKey}&language=ru&append_to_response=credits`),
    getVideo:(id)=>apiService.get(`${urls.movie}/${id}/videos`),
    getAllGenres:()=>apiService.get(urls.genres),
    getMovieByGenre:(genreId, page)=>apiService.get(`${urls.byGenreId}&with_genres=${genreId}&page=${page}`),
    findMovie:(query)=>apiService.get(`${urls.search}&language=ru&query=${query}&page=1&include_adult=false`)

}

export {movieService}