import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {Genres, AllFilms, FilmDetails, Home, NotFound, TopMovies, FilteredByGenre} from "./Pages";
import {useState} from "react";
import css from './Theme.css'
import {Header} from "./Components";


const App = () => {

    const [isLightMode, setIsLightMode]=useState(false);

    const handleThemeToggle = () => {
        setIsLightMode(!isLightMode)
    };



  return (
      <div>


          <div  className={isLightMode ? "dark" : "light"}>
              <Header onThemeToggle={handleThemeToggle} isLight={isLightMode}/>

                  <Routes>

                      <Route path={'/'} element={<MainLayout/>}>

                          <Route index element={<Home/>}/>

                          <Route path={'all_films'} element={<AllFilms isLight={isLightMode}/>}/>
                          <Route path={'all_films/:filmId'} element={<FilmDetails/>}/>

                          <Route path={'top'} element={<TopMovies/>}/>

                            <Route path={'genres'} element={<Genres/>}>

                                <Route path={':genreId'} element={<FilteredByGenre isLight={isLightMode}/>}/>

                             </Route>

                          <Route path={'genres/:genreId/:filmId'} element={<FilmDetails/>}/>

                      </Route>

                      <Route path={'*'} element={<NotFound/>}/>

                  </Routes>

          </div>




      </div>
  );
};

export {App};
