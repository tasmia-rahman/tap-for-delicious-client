import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MbMEwEEljFKzkqnyLnJo99Y9F0RTR0NMplKwgxiXxMpGBFfLAjcUmz5lRySFsmcAQ3XjS8J4Q63DOcZ8dXQLIsv00e0VOh2W3');

const Payment = ({ data }) => {
    console.log(data,"rfgjhalgj");
    let total = 0;
    let foodName = "";
    let id = "";
    //let restaurant = "";
    data.forEach(cartItem => {
        total = total + parseFloat(cartItem.totalPrice);
        foodName  = cartItem.name;
        id=cartItem._id
    });
    
    return (
       <div className="w-7/12 mx-auto mt-[-90px] mb-36" >
         <div className="card bg-base-100 shadow-xl mb-10 ">
         <div className="card-body">
            <h3 className='text-3xl text-warning'>Please Complete your order</h3>
            <p className='text-xl'>Your order is <strong>{foodName}</strong> & Payable amount is <strong>{total}</strong></p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm total = {total} _id={id} foodName ={foodName}  />
                </Elements>
            </div>
        </div>
        </div>
       </div>
    );
};

export default Payment;