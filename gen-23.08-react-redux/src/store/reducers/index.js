import { combineReducers } from "redux";
import checkoutReducer from "./checkoutReducer";

export default combineReducers({
    checkout: checkoutReducer,
});