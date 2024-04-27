import { configureStore } from "@reduxjs/toolkit";
import netflixReducer from './Netflix'

export const store = configureStore({

    reducer:{
        
        netflix : netflixReducer
    }

})