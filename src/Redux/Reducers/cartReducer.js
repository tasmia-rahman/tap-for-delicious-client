import { ADD_TO_CART, DELETE_FROM_CART } from './../ActionTypes/cartActionTypes';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.name !== action.payload.name)
            }
        default:
            return state
    }
}

