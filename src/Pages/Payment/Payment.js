import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6A9xByOjerh25uzEIgalKjSWaT4z6Uj04PVqlUW5QQLQKCb0gRyxFMlgBG9Z8isfZREUxXO0f3nZ9piV5Psz2u00kE1rD7YV');

const Payment = ({ data }) => {
    console.log(data);
    let total = 0;
    data.forEach(cartItem => {
        total = total + parseFloat(cartItem.totalPrice);

    });
    console.log(total)
    return (
       <div className="w-7/12 mx-auto mt-[-90px] mb-36" >
         <div className="card bg-base-100 shadow-xl mb-10 ">
         <div className="card-body">
            <h3 className='text-3xl'>Please Complete your order</h3>
            <p className='text-xl'>Your Payable amount is <strong>{total}</strong></p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm total = {total} />
                </Elements>
            </div>
        </div>
        </div>
       </div>
    );
};

export default Payment;