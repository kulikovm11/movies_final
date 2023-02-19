import css from './MovieCard.module.css'
import {posterURL} from "../../configs/urls";

const Movie = ({movie}) => {
    const{original_title,title,vote_average,poster_path,release_date,overview}=movie
    return (
        <div className={css.Card}>

            <div className={css.Title}>
                {title}
                <p>{vote_average}</p>
            </div>

            <div className={css.Description}>

                <div className={css.Poster}>
                    <img src={posterURL+poster_path} alt={`poster of ${original_title}`}/>
                </div>

                <div className={css.Short_info}>
                    <span>
                        <b>Оригинальное название:</b> {original_title}
                    </span>
                    <span><b>Дата релиза:</b> {release_date}</span>
                    <span><b>Жанр:</b></span>

                </div>

                {/*<div className={css.Overview}>*/}
                {/*    {overview}*/}

                {/*</div>*/}


            </div>

        </div>
    );
};

export {Movie};