import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {About, Category, Home, NotFound, TopMovies} from "./Pages";


const App = () => {
  return (
      <div>

          <Routes>
              <Route path={'/'} element={<MainLayout/>}>

                  <Route index element={<Home/>}/>
                  <Route path={'category_search'} element={<Category/>}/>
                  <Route path={'top'} element={<TopMovies/>}/>
                  <Route path={'about'} element={<About/>}/>

              </Route>

              <Route path={'*'} element={<NotFound/>}/>

          </Routes>


      </div>
  );
};

export {App};
