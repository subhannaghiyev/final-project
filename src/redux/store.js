import {configureStore} from '@reduxjs/toolkit'
import { FavSlice } from './slice/FavSlice'
export const store = configureStore({
    reducer:{
        addToFav:FavSlice.reducer
    }
})