
import {FilmDetailsComponent} from "../../Components";
import {useParams} from "react-router-dom";

const FilmDetails = () => {

    const {filmId} = useParams()

    return (
        <div>

            <FilmDetailsComponent filmId={filmId}/>


        </div>
    );
};

export {FilmDetails};