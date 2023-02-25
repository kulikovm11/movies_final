import {Route, Routes} from "react-router-dom";
import {useState} from "react";

import {MainLayout} from "./Layouts";
import {Genres, AllFilms, FilmDetails, Home, NotFound, TopMovies, FilteredByGenre} from "./Pages";
import {Header} from "./Components";

// Switcher dark or light theme
import css from './Theme.css'


const App = () => {

    const [isLightMode, setIsLightMode]=useState(false);

    const handleThemeToggle = () => {
        setIsLightMode(!isLightMode)
        localStorage.setItem('theme', isLightMode ? 'dark' : 'light');
    };



  return (
      <div>


          <div  className={isLightMode ? "dark" : "light"}>
              <Header onThemeToggle={handleThemeToggle} isLight={isLightMode} setIsLight={setIsLightMode}/>

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
