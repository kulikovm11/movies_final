import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";


const initialState = {
    genres: [],
    errors:null,
    loading:null
}

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_,thunkAPI)=>{
        try {
            const {data} = await movieService.getAllGenres()
            return data.genres

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)





const genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getGenres.fulfilled,(state, action) => {
                state.genres = action.payload

            })
})

const {reducer:genreReducer} = genresSlice

const genreActions = {getGenres}


export {genreReducer, genreActions}