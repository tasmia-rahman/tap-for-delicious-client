import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TbTrash } from "react-icons/tb";
import { addToCart, deleteFromCart } from '../../../Redux/Actions/cartAction';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cartItems);

    const dispatch = useDispatch();

    let subtotal = 0;

    cartItems.forEach(cartItem => {
        subtotal = subtotal + parseFloat(cartItem.totalPrice);
    });

    return (
        <>
            <h3 className='text-warning text-4xl text-center mt-10 mb-4'>Your Order</h3>
            <div className="card w-7/12 bg-base-100 shadow-xl mx-auto mb-36">
                <div className="card-body">
                    {
                        cartItems.map((cartItem, i) => {
                            return <div key={i} className='flex items-center mb-2'>
                                <div>
                                    <h4 className='text-warning text-xl flex items-center'>
                                        <span
                                            className='text-red-600 mr-3 text-lg'
                                            onClick={() => dispatch(deleteFromCart(cartItem))}
                                        >
                                            <TbTrash></TbTrash>
                                        </span>
                                        {cartItem.name}
                                    </h4>
                                    <div className='flex items-center mt-1 ml-8'>
                                        <div>
                                            <p>Quantity:</p>
                                        </div>
                                        <div className='flex items-center ml-2'>
                                            <FaMinusCircle
                                                className='cursor-pointer text-red-500'
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart(cartItem, cartItem.quantity === 1 ? 1 : (cartItem.quantity - 1))
                                                    )
                                                }}
                                            >
                                            </FaMinusCircle>
                                            <p className='px-2 pb-1 text-lg'>{cartItem.quantity}</p>
                                            <FaPlusCircle
                                                className='cursor-pointer text-green-600'
                                                onClick={() => dispatch(addToCart(cartItem, cartItem.quantity + 1))}
                                            >
                                            </FaPlusCircle>
                                        </div>
                                    </div>
                                </div>
                                <p className='flex justify-end'>TK {cartItem.totalPrice}</p>
                            </div>
                        })
                    }
                    <hr />
                    <div className='flex items-center'>
                        <p>Subtotal</p>
                        <p className='flex justify-end'>TK {subtotal}</p>
                    </div>
                    <div className='flex items-center'>
                        <p>Delivery Fee</p>
                        <p className='flex justify-end'>TK 60</p>
                    </div>
                    <div className='flex items-center'>
                        <p>Platform fee</p>
                        <p className='flex justify-end'>TK 3</p>
                    </div>
                    <div className='flex items-center'>
                        <p><span className='font-bold'>Total</span> <small>(Incl. VAT where applicable)</small></p>
                        <p className='flex justify-end'>TK {subtotal + 60 + 3}</p>
                    </div>
                    <button
                        className='btn btn-warning text-white w-full rounded-lg mt-4'
                    >
                        <Link to='/order'>Go To Checkout</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;