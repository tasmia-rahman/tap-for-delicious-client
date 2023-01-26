import { ADD_TO_CART } from './../ActionTypes/cartActionTypes';

export const addToCart = (foodItem) => (dispatch, getState) => {
    let cartItem = {
        _id: foodItem._id,
        image: foodItem.image,
        name: foodItem.name,
        details: foodItem.details,
        price: foodItem.price
    }
    dispatch({ type: ADD_TO_CART, payload: cartItem });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}