import { combineReducers } from "redux";
import userReducer from "./User.reduce";
import postReducer from "./Post.reducer";
export default combineReducers(
    {
        userReducer,
        postReducer
    }
)