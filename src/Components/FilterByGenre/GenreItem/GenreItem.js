import {useNavigate} from "react-router-dom";

import css from './GenresItemStyle.module.css'

const GenreItem = ({genre}) => {

    const { id, name } = genre

    const navigate = useNavigate()

    return (
        <div>

            <div  onClick={()=>navigate(id.toString(), {state:genre})} className={css.Items}> {name} </div>


        </div>
    );
};

export {GenreItem};