import {AllGenres} from "../../Components";
import {Outlet} from "react-router-dom";


const Genres = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <AllGenres />
            <Outlet/>

        </div>
    );
};

export {Genres};