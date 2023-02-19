import {apiService} from "./apiService";
import {urls} from "../configs/urls";


const movieService = {
   getAll:(page=1)=>apiService.get(urls.movies, {params:{page}}),
    getById:(id)=>apiService.get(`${urls.movie}/${id}`),
    getAllGenres:()=>apiService.get(urls.genres)

}

export {movieService}