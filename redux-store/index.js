import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { userSlice } from "./slices/UserSlice"

const Store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        authSlice:authSlice.reducer
    }
})

export default Store