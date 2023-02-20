
import {FilmDetailsComponent} from "../../Components";
import {useParams} from "react-router-dom";
import {Trailers} from "../../Components";

const FilmDetails = () => {

    const {filmId} = useParams()

    return (
        <div>

            <FilmDetailsComponent filmId={filmId}/>
            <Trailers filmId={filmId}/>


        </div>
    );
};

export {FilmDetails};