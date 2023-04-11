import { ADD_TO_BMI_SUCCESS, GET_MY_BMI_ITEMS_ERROR, GET_MY_BMI_ITEMS_LOADING, GET_MY_BMI_ITEMS_SUCCESS } from "./bmi.types";
  

let initalState={
    loading:false,
    error:false,
    data:[]
}

export const bmiReducer= (state=initalState,{type,payload})=>{
    switch(type){

        case GET_MY_BMI_ITEMS_LOADING:{
            return {
                ...state,
                loading:true,
            }
        } 

        case GET_MY_BMI_ITEMS_ERROR:{
            return {
                ...state,
                loading:false,
                error:true
            }
        } 

        case GET_MY_BMI_ITEMS_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        } 

        case ADD_TO_BMI_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                data:[...state.data,payload]
            }
        } 
        default:{
            return state;
        }
    }
}