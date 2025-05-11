import { configureStore } from "@reduxjs/toolkit";
import MovieoReducer from "./MovieoSlice";

const Store = configureStore({
    reducer: {
        movieoData : MovieoReducer
    },
})

export default Store