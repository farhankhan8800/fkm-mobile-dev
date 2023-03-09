import {getHomeApi_2,getHomeApi_1} from "../reducer/homeReducer.js"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
    getHomeApi_2,
    getHomeApi_1
})

export default rootReducer;