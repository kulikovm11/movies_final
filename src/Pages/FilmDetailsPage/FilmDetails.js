import {useParams} from "react-router-dom";


import {FilmDetailsComponent,Trailers} from "../../Components";
import css from './DetailsPageStyle.module.css'

const FilmDetails = () => {

    const {filmId} = useParams()

    return (
        <div className={css.Wrap}>

            <FilmDetailsComponent filmId={filmId}/>
            <Trailers filmId={filmId}/>


        </div>
    );
};

export {FilmDetails};