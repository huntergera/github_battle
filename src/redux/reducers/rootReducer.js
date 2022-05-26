import {combineReducers} from "redux";
import {popularReducer} from "./popularReducer";
import {battleReducer} from "./battleReducer";
import {resultsReducer} from "./resultsReducer";

export const rootReducer = combineReducers({
    popularReducer,
    battleReducer,
    resultsReducer
})