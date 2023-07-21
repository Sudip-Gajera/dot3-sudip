import { combineReducers } from "redux";
import { dataReducer } from "./myData.reducer";

export const rootReducer = combineReducers({
    myData: dataReducer
})