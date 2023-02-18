import {combineReducers, configureStore} from "@reduxjs/toolkit";


import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genresSlice";


const rootReducer = combineReducers({
    movies:movieReducer,
    genres: genreReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}