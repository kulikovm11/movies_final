import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    genres: [],
    errors:null,
    loading:null
}




const genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{},
    extraReducers:{}
})

const {reducer:genreReducer} = genresSlice

const genreActions = {}


export {genreReducer, genreActions}