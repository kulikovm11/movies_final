
import {useEffect, useState} from "react";

import {movieService} from "../../services/movieService";
import {posterURL} from "../../configs/urls";



const FilmDetailsComponent = ({filmId}) => {

    const [film, setFilm] = useState(null)



    useEffect(()=>{
        movieService.getById(filmId).then(({data})=>setFilm(data))
    },[])

    return (
        <div>
            {film &&
                <>
                    <img src={posterURL+film.backdrop_path} alt=""/>
                    <p>{film.overview}</p>
                </>

            }


        </div>
    );
};

export {FilmDetailsComponent};