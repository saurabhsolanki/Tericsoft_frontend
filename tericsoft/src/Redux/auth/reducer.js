import { AUTH_LOGOUT, login_success } from "./authType";

const initState = {
  token: "",
  username:"",
};
export const authReducer = (state = initState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case login_success:{
      return {
        ...state,
        token: payload.token,
        username:payload.user,
        
      };
    }

    case AUTH_LOGOUT: {
      return {
        ...state,
        token: "",
      };
    }
    
    default:
      return state;
  }
};
