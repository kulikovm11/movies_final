import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import css from './MoviesStyle.module.css'
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";

import {movieService} from "../../services/movieService";

const Movies = ({isLight}) => {
    const {moviesArr} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'})


    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        setIsLoading(true)
        try {
            dispatch(movieActions.getAll({page:query.get('page')}));
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }},[dispatch, query])



    const [req, setReq]=useState('')
    const [movies, setMovies] = useState([])








    const findMovie = async (e) =>{
        e.preventDefault();
        try {
            const response = await movieService.findMovie(req)
            setMovies(response.data.results)
        }catch (err) {
            console.log(err)
        }
    }



    return (
        <>
            <div className={css.Form}>

                <form onSubmit={findMovie}>

                    <input type="text"
                     placeholder="Поиск"
                     value={req}
                     onChange={(e)=>setReq(e.target.value)}/>

                    <button type="submit">Искать</button>

                </form>

            </div>
        <div className={css.Container}>

            {!isLoading && (movies.length > 0 ? movies : moviesArr).map(movie => <Movie key={movie.id} movie={movie} isLight={isLight}/>)}







        </div>
            {isLoading && <div className={css.Loader}>Загрузка...</div>}
            <div className={css.Pagination}>
                <button disabled={+query.get('page')<=1} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>Назад</button>
                <button onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>Дальше</button>
            </div>

        </>
    );
};

export {Movies};