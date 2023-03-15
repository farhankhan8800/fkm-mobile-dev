import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { homeSlice } from "./slices/HomeSlice";
import {userSlice} from "./slices/UserSlice"

const Store = configureStore({
    reducer:{
        homeSlice : homeSlice.reducer, 
        userSlice: userSlice.reducer,
        authSlice:authSlice.reducer
    }
})

export default Store