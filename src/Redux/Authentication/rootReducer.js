import { combineReducers } from "redux";
import userReducer from "./reducer";
import { cartReducer } from './../Reducers/cartReducer';


const rootReducer = combineReducers({
    user: userReducer,
    cartReducer: cartReducer
});

export default rootReducer;