import { useNavigate} from "react-router-dom";


import css from './MovieCard.module.css'
import {posterURL} from "../../configs/urls";
import {Stars} from "../StarsComponent/Stars";

import {GenresComponent} from "../GenresComponent/GenresComponent";


const Movie = ({movie, isLight}) => {

    const navigate = useNavigate()


    const{id,original_title,title,vote_average,poster_path,release_date, genre_ids}=movie




    return (
        <div className={isLight ? css.Card_Dark : css.Card_Light}>

            <div className={css.Title}>
                {title}

                <Stars rating={vote_average}/>
            </div>

            <div className={css.Description}>

                <div className={css.Poster}>
                    <img src={posterURL+poster_path} alt={`poster of ${original_title}`}/>
                </div>

                <div className={css.Short_info}>
                    <div className={css.GenreTags}><GenresComponent genre_id={genre_ids}/> </div>
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