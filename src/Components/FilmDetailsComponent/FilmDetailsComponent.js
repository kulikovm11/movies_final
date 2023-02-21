
import {useEffect, useState} from "react";

import {movieService} from "../../services/movieService";
import {posterURL} from "../../configs/urls";
import css from './AboutFilmStyle.module.css'




const FilmDetailsComponent = ({filmId}) => {

    const [film, setFilm] = useState(null)




    useEffect(()=>{
        movieService.getById(filmId).then(({data})=>setFilm(data))
    },[filmId])





    return (
        <div className={css.Content}>
            {film &&
                <>
                    <img src={posterURL+film.backdrop_path} alt=""/>


                    {film.genres.length > 0 ? (

                    <div>
                        <b>Жанры:</b>
                    {film.genres.map(genre=><span>{` ${genre.name}`}</span>)}

                    </div>) : null

                    }




                    {film.production_companies.length > 0 ? (
                        <div>
                            <b>Киностудия</b>
                            {film.production_companies.map((studio) => (
                                <div>{studio.name}</div>
                            ))}
                        </div>
                    ) : null}

                    {film.production_countries.length > 0 ? (
                        <div>
                        <b>Страна</b>
                        {film.production_countries.map(countrie=><div>{countrie.name}</div>)}

                    </div>): null
                    }


                    {film.runtime ? (

                    <p>
                        <b>Длительность: </b>{film.runtime} мин.
                    </p>
                    ) : null}




                    {film.release_date ? (
                        <p>
                            <b>Дата релиза: </b> {film.release_date}
                        </p>
                    ) : null}


                    {film.overview ? (

                    <p>{film.overview}</p>
                        ) : null}




                </>



            }





        </div>
    );
};

export {FilmDetailsComponent};