import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";

const Movies = () => {
    const {moviesArr,prev,next} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'})

    useEffect(()=>{
        dispatch(movieActions.getAll({page:query.get('page')}))
    },[dispatch, query])



    return (
        <div>



            {moviesArr.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <div>
                <button  onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button  onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>




        </div>
    );
};

export {Movies};