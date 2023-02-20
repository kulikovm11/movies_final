import {Link, useNavigate} from "react-router-dom";


import css from './MovieCard.module.css'
import {posterURL} from "../../configs/urls";
import {Stars} from "../StarsComponent/Stars";

const Movie = ({movie}) => {

    const navigate = useNavigate()


    const{id,original_title,title,vote_average,poster_path,release_date}=movie
    return (
        <div className={css.Card}>

            <div className={css.Title}>
                {title}

                <Stars rating={vote_average}/>
            </div>

            <div className={css.Description}>

                <div className={css.Poster}>
                    <img src={posterURL+poster_path} alt={`poster of ${original_title}`}/>
                </div>

                <div className={css.Short_info}>
                    <span><b>Жанр:</b></span>
                    <span><b>Дата релиза:</b> {release_date}</span>
                    <span>
                        <b>Оригинальное название:</b> {original_title}
                    </span>


                    <button onClick={()=>navigate(id.toString())}>Подробнее</button>

                </div>




            </div>

        </div>
    );
};

export {Movie};