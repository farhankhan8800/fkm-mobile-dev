import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        token:null
    },
    reducers:{
        registerToken(state, action) {
            state.token = action.payload;
        }, 
        clearToken(state, action) {
            state.replace(action.payload)
        }, 
    }
})
const {registerToken} = authSlice.actions
export {authSlice, registerToken};