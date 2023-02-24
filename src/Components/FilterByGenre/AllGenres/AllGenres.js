import {useEffect, useState} from "react";
import {movieService} from "../../../services/movieService";
import {GenreItem} from "../GenreItem/GenreItem";

const AllGenres = () => {

    const [genresArr, setGenresArr] = useState([])

    useEffect(()=>{
        movieService.getAllGenres().then(({data})=>setGenresArr([...data.genres]))
    },[])







    return (
        <div className="GENRES">

            {genresArr.map(genre=><GenreItem key={genre.id} genre={genre} />)}

        </div>
    );
};

export {AllGenres};