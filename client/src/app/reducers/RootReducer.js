import { userInfo } from "./LoginReducer";
import { combineReducers } from "redux-immutable";

const RootReducer = combineReducers({
    user: userInfo
});

export default RootReducer;