import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    HOME: true,
    TVSHOWS: false,
    MOVIES: false,
    CHILDREN: false,
    SEARCH:false,
    INPUT:false,
    SEARCHBTN:true,
  
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
            state.SEARCH = false;
            state.INPUT = false,
            state.SEARCHBTN = true
        },
        tvshows: (state) => {
            state.HOME = false;
            state.TVSHOWS = true;
            state.MOVIES = false;
            state.CHILDREN = false;
            state.SEARCH = false;
            state.INPUT = false,
            state.SEARCHBTN = true
           
        },
        movies: (state) => {
            state.HOME = false;
            state.TVSHOWS = false;
            state.MOVIES = true;
            state.CHILDREN = false;
            state.SEARCH = false;
            state.INPUT = false,
            state.SEARCHBTN = true
           
        },
        child: (state) => {
            state.HOME = false;
            state.TVSHOWS = false;
            state.MOVIES = false;
            state.CHILDREN = true;
            state.SEARCH = false;
            state.INPUT = false,
            state.SEARCHBTN = true
        },
        moviesearch:(state)=>{

            state.SEARCH=true
            state.HOME = false;
            state.TVSHOWS = false;
            state.MOVIES = false;
            state.CHILDREN = false;

        },
        btnsearch:(state)=>{

            state.INPUT = true,
            state.SEARCHBTN = false
        }
    }
});

export const { home, tvshows, movies, child,moviesearch,btnsearch } = netflixSlice.actions;
export default netflixSlice.reducer;
