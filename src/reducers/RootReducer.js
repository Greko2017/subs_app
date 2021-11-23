import {combineReducers} from "redux";  
import globalReducer from "../redux/global.reducer";

const rootReducer = combineReducers({
    global: globalReducer,
});

export default rootReducer;