import { combineReducers } from "redux";
import articleReducer from './post.reducer';
import userReducer from "./user.reducer" ;

export default combineReducers({
    articleReducer,
    userReducer,
})