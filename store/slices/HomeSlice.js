import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name:"homeSlice",
    initialState:[],
    reducers:{
        addData(state, action) {
            state.push(action.payload)
        },
        // lodeData(state, action) {}
    }
})
const {addData} = homeSlice.actions
export  { homeSlice, addData };