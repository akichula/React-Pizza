import {combineReducers} from "redux";

import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./cart"

const rootReducer = combineReducers({
    pizzas,
    filters,
    cart
})

export default rootReducer
