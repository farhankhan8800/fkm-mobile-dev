
import {GET_HOME_API_1,GET_HOME_API_2} from "../var.js"

const initalState = 0
const getHomeApi_1 = ( state = initalState, action)=>{
   switch(action.type){
    case GET_HOME_API_1 : 
    return{
     
    }
    default: return state 
   }
}
const getHomeApi_2 = ( state = initalState, action)=>{
    switch(action.type){
     case GET_HOME_API_2 :return (state +1);
     default: return state 

    }
    
 }
 
 
export {getHomeApi_2,getHomeApi_1}


