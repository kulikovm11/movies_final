import {useLocation, useParams} from "react-router-dom";
import {SelectedByGenre} from "../../Components";

const FilteredByGenre = () => {

    const {genreId} = useParams();
    const {state} = useLocation();


    return (
        <div>
            <SelectedByGenre genreId={genreId} state={state}/>
        </div>
    );
};

export {FilteredByGenre};