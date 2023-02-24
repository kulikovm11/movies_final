
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
                    <div className={css.Description}>


                        <div className='data'>

                            {film.genres.length > 0 ? (

                            <div>
                                <b style={{color:'plum'}}>Жанры:</b>
                            {film.genres.map(genre=><span>{` ${genre.name}`}</span>)}

                            </div>) : null

                            }


                            {film.production_companies.length > 0 ? (
                                <div>
                                    <b style={{color:'plum'}}>Киностудия:</b>
                                    {film.production_companies.map((studio) => (
                                        <div>{studio.name}</div>
                                    ))}
                                </div>
                            ) : null}


                            {film.production_countries.length > 0 ? (
                                <div>
                                <b style={{color:'plum'}}>Страна:</b>
                                {film.production_countries.map(countrie=><div>{countrie.name}</div>)}

                            </div>): null
                            }



                            {film.runtime ? (

                            <p>
                                <b style={{color:'plum'}}>Длительность: </b>{film.runtime} мин.
                            </p>
                            ) : null}


                            {film.release_date ? (
                                <p>
                                    <b style={{color:'plum'}}>Дата релиза: </b> {film.release_date}
                                </p>
                            ) : null}

                        </div>


                        <div className={css.Poster}>

                            <img src={posterURL+film.backdrop_path} alt="poster"/>

                        </div>

                    </div>

                    <div className={css.Overview}>

                        {film.overview ? (

                        <p>{film.overview}</p>
                            ) : null}

                    </div>


                    {film.credits.cast.length > 0 ? (
                        <div className={css.Actors}>
                            <b style={{color:'plum'}}>В главных ролях:</b>

                            {film.credits.cast.map((cast) => (
                                <span >{cast.order<5? cast.name:null}</span>
                            ))}
                        </div>
                    ) : null}


                </>


            }





        </div>
    );
};

export {FilmDetailsComponent};