import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData : [],
    imageURL : ""
}
export const MovieoSlice = createSlice({
    name: 'movieo',
    initialState,
    reducers : {
        setBannerData : (state,action) => {
            state.bannerData = action.payload
        },
        setImageURL : (state,action) =>{
            state.imageURL = action.payload
        }
    }
})

export const {setBannerData , setImageURL} = MovieoSlice.actions
export default MovieoSlice.reducer