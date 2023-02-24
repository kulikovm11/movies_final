import {useLocation, useParams} from "react-router-dom";
import {SelectedByGenre} from "../../Components";

const FilteredByGenre = ({isLight}) => {

    const {genreId} = useParams();
    const {state} = useLocation();



    return (
        <div>
            <SelectedByGenre genreId={genreId} state={state} isLight={isLight}/>
        </div>
    );
};

export {FilteredByGenre};