import {apiService} from "./apiService";
import {urls} from "../configs/urls";


const movieService = {
   getAll:(page=1)=>apiService.get(urls.movies, {params:{page}}),
    getById:(id)=>apiService.get(`${urls.movie}/${id}?api_key=<<api_key>>&language=ru`),
    getVideo:(id)=>apiService.get(`${urls.movie}/${id}/videos`),
    getAllGenres:()=>apiService.get(urls.genres)

}

export {movieService}