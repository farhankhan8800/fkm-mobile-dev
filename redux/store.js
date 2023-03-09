import { createStore } from "redux";
 import rootReducer from "./reducer/rootReducer";
//  import { configureStore } from "@reduxjs/toolkit";
 const store = createStore(rootReducer)

 export default store;