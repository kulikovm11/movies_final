import {useEffect, useState} from "react";
import {movieService} from "../../services/movieService";
import {Trailer} from "../TrailerComponent/Trailer";


const Trailers = ({filmId}) => {

    const[videos, setVideos] = useState([])

    useEffect(()=>{

        movieService.getVideo(filmId).then(({data})=>{setVideos(data.results)
        console.log(data.results)})


    },[])



    const filtered = videos.filter((video)=> video.type === 'Trailer')



    return (
        <div>

            {filtered.map(video=> <Trailer key={video.id} video={video}/>)}








            {/*<Trailer video={videos}/>*/}



        </div>
    );
};

export {Trailers};