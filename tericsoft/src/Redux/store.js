import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { bmiReducer } from "./Bmi/bmi.reducer";


const root = combineReducers({
    auth: authReducer,
    bmi:bmiReducer
  });
  
  export const store = legacy_createStore(root, applyMiddleware(thunk));