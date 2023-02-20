import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MbMEwEEljFKzkqnyLnJo99Y9F0RTR0NMplKwgxiXxMpGBFfLAjcUmz5lRySFsmcAQ3XjS8J4Q63DOcZ8dXQLIsv00e0VOh2W3');

const Payment = ({ data ,handleOrder}) => {

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
       <div className=" lg:w-4/5 mx-auto mb-36" >
         <div className="card mb-10 ">
         <div className="card-body">
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm total = {total} _id={id} foodName ={foodName} handleOrder={handleOrder} />
                </Elements>
            </div>
        </div>
        </div>
       </div>
    );
};

export default Payment;