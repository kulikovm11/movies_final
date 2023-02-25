import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../../services/movieService";
import {Movie} from "../../Movie/Movie";
import css from "../../Movies/MoviesStyle.module.css";




const SelectedByGenre = ({genreId,state,isLight}) => {



    const [films, setFilms] = useState(null)

    const [query, setQuery] = useSearchParams({page:'1'})


    const perPage = 10;





    useEffect(()=>{
        movieService.getMovieByGenre(genreId, { page: query.get('page'), perPage }).then(({ data }) => setFilms(data.results));

    },[genreId, query])

    const totalPages = films ? Math.ceil(films.length / perPage) : 0;
    const startIndex = (query.get('page') - 1) * perPage;
    const endIndex = startIndex + perPage;


    return (
        <div>
            {films ? (
                <div>
                    {films.slice(startIndex, endIndex).map((movie) => (
                        <Movie key={movie.id} movie={movie} isLight={isLight}/>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <div className={css.Pagination}>
                <button
                    disabled={+query.get('page') <= 1}
                    onClick={() =>
                        setQuery((query) => ({
                            page: +query.get('page') - 1,
                        }))
                    }
                >
                    Назад
                </button>

                <button
                    disabled={+query.get('page') >= totalPages}
                    onClick={() =>
                        setQuery((query) => ({
                            page: +query.get('page') + 1,
                        }))
                    }
                >
                    Дальше
                </button>
            </div>






        </div>
    );
};

export {SelectedByGenre};