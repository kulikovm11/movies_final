import {useEffect, useState} from "react";
import {movieService} from "../../../services/movieService";
import {Movie} from "../../Movie/Movie";
import css from "../../Movies/MoviesStyle.module.css";
import {useSearchParams} from "react-router-dom";

import {useDispatch} from "react-redux";


const SelectedByGenre = ({genreId,state}) => {

    const [films, setFilms] = useState(null)

    const [query, setQuery] = useSearchParams({page:'1'})

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(movieActions.getAll({page:query.get('page')}))
    // },[dispatch, query])




    useEffect(()=>{
        movieService.getMovieByGenre(genreId).then(({data})=>setFilms(data.results))

    },[genreId, query])


    return (
        <div>
            {films? (<div>

                    {films.map((movie)=>(
                        <Movie key={movie.id} movie={movie}/>
                    ))}

                </div>

            ) : (<p>Loading...</p>)}

            <div className={css.Pagination}>
                <button disabled={+query.get('page')<=1} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>Назад</button>
                <button onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>Дальше</button>
            </div>
        </div>
    );
};

export {SelectedByGenre};