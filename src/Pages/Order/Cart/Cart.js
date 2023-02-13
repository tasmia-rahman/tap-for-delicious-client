import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TbTrash } from "react-icons/tb";
import { addToCart, deleteFromCart } from '../../../Redux/Actions/cartAction';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { Player } from '@lottiefiles/react-lottie-player';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    console.log(cartItems.length);

    const dispatch = useDispatch();

    let subtotal = 0;

    cartItems.forEach(cartItem => {
        subtotal = subtotal + parseFloat(cartItem.totalPrice);
    });

    return (
        cartItems.length > 0 ?
            <>
                <h3 className='text-warning text-4xl text-center mt-10 mb-4'>Your Order</h3>
                <div className="card w-7/12 bg-base-100 shadow-xl mx-auto mb-36">
                    <div className="card-body">
                        {
                            cartItems.map((cartItem, i) => {
                                return <div key={i} className='lg:flex md:flex items-center mb-2'>
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
                                                <p className='ml-[-31px] md:ml-1 lg:ml-1'>Quantity:</p>
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
                                    <p className='lg:flex md:flex justify-end'>TK {cartItem.totalPrice}</p>
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
                            <p><span className='font-bold'>Total</span> <small className='hidden lg:flex md:flex'>(Incl. VAT where applicable)</small></p>
                            <p className='flex justify-end'>TK {subtotal + 60 + 3}</p>
                        </div>
                        <button
                            className='btn mx-auto md:mx-auto flex justify-center mt-16 border-2 bg-amber-400 border-amber-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 w-full'
                        >
                            <Link to='/order'>Go To Checkout</Link>
                        </button>
                    </div>
                </div>
            </>
            :
            <div className='min-h-screen flex flex-col md:flex-row items-center justify-center'>
                <h3 className='text-warning text-4xl text-center '>Nothing in cart!</h3>
                <Player
                    src='https://assets5.lottiefiles.com/packages/lf20_peztuj79.json'
                    className="player"
                    loop
                    autoplay
                    speed={1}
                />
            </div>
    );
};

export default Cart;