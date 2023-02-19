import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {Genres, AllFilms, FilmDetails, Home, NotFound, TopMovies} from "./Pages";


const App = () => {
  return (
      <div>

          <Routes>

              <Route path={'/'} element={<MainLayout/>}>

                  <Route index element={<Home/>}/>

                  <Route path={'all_films'} element={<AllFilms/>}>
                      <Route path={':filmId'} element={<FilmDetails/>}/>
                  </Route>

                  <Route path={'top'} element={<TopMovies/>}/>
                  <Route path={'genres'} element={<Genres/>}/>

              </Route>

              <Route path={'*'} element={<NotFound/>}/>

          </Routes>


      </div>
  );
};

export {App};
