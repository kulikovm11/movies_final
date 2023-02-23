import {useEffect, useState} from "react";
import {movieService} from "../../../services/movieService";
import {Movie} from "../../Movie/Movie";

const SelectedByGenre = ({genreId,state}) => {

    const [films, setFilms] = useState(null)

    useEffect(()=>{
        movieService.getMovieByGenre(genreId).then(({data})=>setFilms(data.results))

    },[genreId])


    return (
        <div>
            {films? (<div>

                    {films.map((movie)=>(
                        <Movie key={movie.id} movie={movie}/>
                    ))}

                </div>

            ) : (<p>Loading...</p>)





            }
        </div>
    );
};

export {SelectedByGenre};