import axios from "axios";
import { ADD_TO_BMI_SUCCESS, GET_MY_BMI_ITEMS_ERROR, GET_MY_BMI_ITEMS_LOADING, GET_MY_BMI_ITEMS_SUCCESS } from "./bmi.types";

export const getBmiItems = (token) => async (dispatch) => {
  dispatch({ type: GET_MY_BMI_ITEMS_LOADING });
  try {
    let res = await axios.get("https://tericsoft-t4ub.onrender.com/bmi", {
      headers: { token: token },
    });
    console.log(res.data,"res data")
    dispatch({ type: GET_MY_BMI_ITEMS_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: GET_MY_BMI_ITEMS_ERROR });
  }
};


export const addItemToMyBmiItems=(token,weight,height,bmi)=>async(dispatch)=>{
  let obj={
    weight,
    height,
    bmi
  }
  try {
    let res = await axios.post("https://tericsoft-t4ub.onrender.com/bmi", obj,{
      headers: { token: token },
    });
    console.log(res.data,'res post data')
    dispatch({type:ADD_TO_BMI_SUCCESS,payload:res.data})
  } catch (error) {
    alert('error in adding bmi')
  }
}