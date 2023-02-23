import {AllGenres} from "../../Components/FilterByGenre/AllGenres/AllGenres";
import {Outlet} from "react-router-dom";


const Genres = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-around',backgroundColor:'#18181B'}}>
            <AllGenres/>
            <Outlet/>

        </div>
    );
};

export {Genres};