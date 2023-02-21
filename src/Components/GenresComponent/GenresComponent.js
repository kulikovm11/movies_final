import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {genreActions} from "../../redux";
import {GenreBadge} from "../GenreBagde/GenreBadge";

const GenresComponent = ({genre_id}) => {
    const {genres} = useSelector(state => state.genres)
    const dispatch = useDispatch()







    useEffect(()=>{
        dispatch(genreActions.getGenres())
    },[dispatch])





    return (
        <div>
            {genres.map(genre=> <GenreBadge key={genre.id} genre={genre} genre_id={genre_id} />)}


        </div>
    );
};

export {GenresComponent};