import { combineReducers } from "redux";
import todos from "./todosReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
    todos,
    filterReducer
})