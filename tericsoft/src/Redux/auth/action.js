import axios from "axios";
import { AUTH_LOGOUT, login_success } from "./authType";

export const LoginApi = (creds,toast,navigate) => async (dispatch) => {
  try {
    let res = await axios.post("https://tericsoft-t4ub.onrender.com/user/login", creds);
    dispatch({ type: login_success, payload: res.data });
    localStorage.setItem("token", JSON.stringify(res.data.token))
    toast({
      position: 'top',
      title: `${res.data.message}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    navigate("/bmi");
  } catch (er) {
    toast({
      position: 'top',
      title: `${er.response.data.message}`,
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }
};

export const signupPost=(data,toast,navigate)=>async (dispatch)=>{
 try {
  let res= await axios.post(`https://tericsoft-t4ub.onrender.com/user/signup`, data)

  toast({
    position: 'top',
    title: `${res.data.message}`,
    status: 'success',
    duration: 5000,
    isClosable: true,
  })
    navigate('/login')
 } catch (error) {
  toast({
    position: 'top',
    title: `${error.response.data.message}`,
    status: 'error',
    duration: 5000,
    isClosable: true,
  })
 }
}

export const logout=()=>({type:AUTH_LOGOUT})