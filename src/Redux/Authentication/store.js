import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartReducer: {
        cartItems: cartItems
    }
}

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));