import {useEffect, useState} from "react";

import {movieService} from "../../../services/movieService";
import {GenreItem} from "../GenreItem/GenreItem";


const AllGenres = () => {

    const [genresArr, setGenresArr] = useState([])


    useEffect(()=>{
        movieService.getAllGenres().then(({data})=>setGenresArr([...data.genres]))
    },[])

    const [selectedGenre, setSelectedGenre] = useState(null)

    const handleSelectGenre = (genre) => {
        setSelectedGenre(genre)
    }







    return (
        <div className="GENRES">
            {selectedGenre && (
                <div>Вы выбрали жанр: <span style={{color:'plum'}}>{selectedGenre.name}</span></div>
            )}
            {genresArr.map((genre) => (
                <GenreItem key={genre.id} genre={genre} onSelect={handleSelectGenre} />
            ))}
        </div>
    )
}

export {AllGenres};