import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"UserSlice",
    initialState:[],
    reducers:{
        loginFun(state, action) {
            state.push(action.payload)
        }, 
    }
})
const {loginFun} = userSlice.actions
export {userSlice, loginFun};