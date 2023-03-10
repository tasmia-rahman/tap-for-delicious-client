import { ADD_TO_CART, DELETE_FROM_CART, EMPTY_CART } from './../ActionTypes/cartActionTypes';

export const addToCart = (foodItem, quantity) => (dispatch, getState) => {
    let cartItem = {
        _id: foodItem._id,
        image: foodItem.image,
        name: foodItem.name,
        details: foodItem.details,
        restaurant: foodItem.restaurant,
        price: foodItem.price,
        quantity,
        totalPrice: (foodItem.price * quantity)
    }
    dispatch({ type: ADD_TO_CART, payload: cartItem });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
}

export const deleteFromCart = (foodItem) => (dispatch, getState) => {
    dispatch({ type: DELETE_FROM_CART, payload: foodItem });
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const emptyCart = () => (dispatch) => {
    dispatch({ type: EMPTY_CART });
    // localStorage.setItem('cartItems', JSON.stringify([]));
    localStorage.removeItem('cartItems');
}