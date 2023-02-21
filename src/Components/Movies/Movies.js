import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from './MoviesStyle.module.css'
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";

const Movies = () => {
    const {moviesArr, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'})

    useEffect(()=>{
        dispatch(movieActions.getAll({page:query.get('page')}))
    },[dispatch, query])





    return (
        <div className={css.Container}>



            {moviesArr.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <div>
                <button disabled={+query.get('page')<=1} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>Назад</button>
                <button onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>Дальше</button>
            </div>




        </div>
    );
};

export {Movies};