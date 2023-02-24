import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

const initialState = {
    moviesArr: [],
    page:null,
    errors: null,
    loading : null,
}


const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI)=>{
        try {
            const {data} = await movieService.getAll(page)
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)












const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results} = action.payload

                state.moviesArr = results
                state.page = page


            })
})

const {reducer:movieReducer, } = movieSlice

const movieActions = {getAll,}

export {movieReducer, movieActions}