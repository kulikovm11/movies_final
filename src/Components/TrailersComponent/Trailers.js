import {useEffect, useState} from "react";
import {movieService} from "../../services/movieService";
import {Trailer} from "../TrailerComponent/Trailer";


const Trailers = ({filmId}) => {

    const[videos, setVideos] = useState([])

    useEffect(()=>{

        movieService.getVideo(filmId).then(({data})=>{setVideos(data.results)
        })


    },[filmId])



    const filtered = videos.filter((video)=> video.type === 'Trailer')



    return (
        <div style={{display:'flex', justifyContent:'space-around',backgroundColor: '#232229'}}>

            {filtered.map(video=> <Trailer key={video.id} video={video}/>)}




        </div>
    );
};

export {Trailers};