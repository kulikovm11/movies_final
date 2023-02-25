import {useNavigate} from "react-router-dom";

import css from './GenresItemStyle.module.css'

const GenreItem = ({genre, onSelect}) => {

    const { id, name } = genre

    const navigate = useNavigate()

    const handleClick = () => {
        onSelect(genre)
        navigate(id.toString(), { state: genre })
    }

    return (
        <div>


            <div onClick={handleClick} className={css.Items}> {name} </div>


        </div>
    );
};

export {GenreItem};