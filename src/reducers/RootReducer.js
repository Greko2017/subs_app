import {combineReducers} from "redux";  
import globalReducer from "../redux/global.reducer";

const RootReducer = combineReducers({
    global: globalReducer,
});

export default RootReducer;