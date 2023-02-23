import {AllGenres} from "../../Components/FilterByGenre/AllGenres/AllGenres";
import {Outlet} from "react-router-dom";


const Genres = () => {
    return (
        <div>
            <AllGenres/>
            <Outlet/>

        </div>
    );
};

export {Genres};