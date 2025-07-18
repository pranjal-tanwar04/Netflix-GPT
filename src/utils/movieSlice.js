import { createSlice } from "@reduxjs/toolkit";


const movieSlice =createSlice({
    name:"movies",
    initialState:{
        addNowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.addNowPlayingMovies=action.payload;
        },
    }
});

export const{addNowPlayingMovies} =movieSlice.actions;
export default movieSlice;