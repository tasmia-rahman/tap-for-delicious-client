import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TbTrash } from "react-icons/tb";
import { deleteFromCart } from '../../../Redux/Actions/cartAction';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cartItems);

    const dispatch = useDispatch();

    let subtotal = 0;

    cartItems.forEach(cartItem => {
        subtotal = subtotal + parseFloat(cartItem.price);
    });

    return (
        <>
            <h3 className='text-warning text-4xl text-center mt-10 mb-4'>Your Order</h3>
            <div className="card w-7/12 bg-base-100 shadow-xl mx-auto mb-36">
                <div className="card-body">
                    {
                        cartItems.map((cartItem, i) => {
                            return <div key={i}>
                                <div className='flex items-center'>
                                    <h4 className='text-warning text-xl flex items-center'>
                                        <span
                                            className='text-red-600 mr-3 text-lg'
                                            onClick={() => dispatch(deleteFromCart(cartItem))}
                                        >
                                            <TbTrash></TbTrash>
                                        </span>
                                        {cartItem.name}
                                    </h4>
                                    <p className='flex justify-end'>TK {cartItem.price}</p>
                                </div>
                                {/* <div>
                                <span className='text-3xl cursor-pointer'>-</span>
                                <span className='text-xl pt-1 px-4'></span>
                                <span className='text-3xl cursor-pointer'>+</span>
                            </div> */}
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