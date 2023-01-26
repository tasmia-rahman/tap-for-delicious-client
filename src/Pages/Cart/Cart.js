import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cartItems);

    let subtotal = 0;

    cartItems.forEach(cartItem => {
        subtotal = subtotal + parseFloat(cartItem.price);
    });
    console.log(subtotal);

    return (
        <div className="card w-7/12 bg-base-100 shadow-xl mx-auto my-36">
            <div className="card-body">
                {
                    cartItems.map((cartItem, i) => {
                        return <div key={i}>
                            <div className='flex items-center'>
                                <h4 className='text-warning text-xl'>{cartItem.name}</h4>
                                <p className='flex justify-end'>TK {cartItem.price}</p>
                            </div>
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
                    className='btn btn-warning w-full rounded-lg mt-4'
                >
                    Go To Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;