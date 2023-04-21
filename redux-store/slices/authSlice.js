import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        data:null,
        verified:null
    },
    reducers:{
        registerToken(state, action) {
            state.data = action.payload;
        },
        loginVarifid(state, action){
            state.verified = action.payload;
        }, 
        clearToken(state, action) {   
            state.data = action.payload;
        }, 
    }
})

const {registerToken,clearToken,loginVarifid} = authSlice.actions
export {authSlice, registerToken,loginVarifid, clearToken};