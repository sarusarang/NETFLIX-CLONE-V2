import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    HOME: true,
    TVSHOWS: false,
    MOVIES: false,
    CHILDREN: false,
  
}

const netflixSlice = createSlice({
    name: "Netflix",
    initialState: initialState,
    reducers: {
        home: (state) => {
            state.HOME = true;
            state.TVSHOWS = false;
            state.MOVIES = false;
            state.CHILDREN = false;
           
            
        },
        tvshows: (state) => {
            state.HOME = false;
            state.TVSHOWS = true;
            state.MOVIES = false;
            state.CHILDREN = false;
           
        },
        movies: (state) => {
            state.HOME = false;
            state.TVSHOWS = false;
            state.MOVIES = true;
            state.CHILDREN = false;
           
        },
        child: (state) => {
            state.HOME = false;
            state.TVSHOWS = false;
            state.MOVIES = false;
            state.CHILDREN = true;
            
        }
    }
});

export const { home, tvshows, movies, child } = netflixSlice.actions;
export default netflixSlice.reducer;
