import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        data:null
    },
    reducers:{
        registerToken(state, action) {
            state.data = action.payload;
        }, 
        clearToken(state, action) {   
        }, 
    }
})
const {registerToken} = authSlice.actions
export {authSlice, registerToken};