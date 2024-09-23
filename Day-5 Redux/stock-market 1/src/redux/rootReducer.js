import { combineReducers } from "redux";
import balanceReducer from "./balanceReducer";
import portfolioReducer from "./portfolioReducer";
import stocksDataReducer from "./stockDataReducer";

const rootReducer=combineReducers({
    stocksData:stocksDataReducer,
    portfolio: portfolioReducer,
    balance:balanceReducer

});
export default rootReducer;

