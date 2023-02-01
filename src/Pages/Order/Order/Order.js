import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from './../../../Redux/Actions/cartAction';

const Order = () => {
    const navigate = useNavigate();
    const { uid, email } = useSelector((state) => state.user.currentUser);
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    console.log(cartItems);

    const dispatch = useDispatch();

    const [deliveryOption, setDeliveryOption] = useState(false);
    const [paymentType, setPaymentType] = useState('COD');

    const handleOrder = (event) => {
        event.preventDefault()

        const form = event.target;
        const road = form.road.value;
        const house = form.house.value;
        const area = form.area.value;
        const postalCode = form.postalCode.value;
        const note = form.note.value;

        const order = {
            buyerId: uid,
            buyerEmail: email,
            cartItems,
            road,
            house,
            area,
            postalCode,
            note,
            deliveryOption,
            paymentType
        }

        // save order information to the database
        fetch('https://tap-for-delicious-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('Your order has been placed successfully.');
                    navigate('/');
                }
            })
    }

    return (
        <form onSubmit={handleOrder}>
            <div className='w-7/12 mx-auto mt-6 mb-36'>
                <div className="card bg-base-100 shadow-xl mb-10">
                    <div className="card-body">
                        <h4 className='text-warning text-2xl mb-3'>Delivery Details</h4>
                        <div className='flex items-center justify-between bg-gray-100 p-4 mb-2 rounded-md'>
                            <div>
                                <p>Contactless delivery</p>
                                <p>To keep you safe, the rider will place your order at your door </p>
                            </div>
                            <input onChange={() => setDeliveryOption(!deliveryOption)} type="checkbox" className="toggle toggle-warning" />
                        </div>
                        <input
                            type="text"
                            name="road"
                            placeholder="Road No."
                            className="input input-bordered input-warning w-full my-3"
                            required
                        />
                        <input
                            type="text"
                            name="house"
                            placeholder="House No."
                            className="input input-bordered input-warning w-full my-3"
                            required
                        />
                        <input
                            type="text"
                            name="area"
                            placeholder="Area"
                            className="input input-bordered input-warning w-full my-3"
                            required
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            className="input input-bordered input-warning w-full my-3"
                            required
                        />
                        <textarea
                            name="note"
                            placeholder="Note to rider - e.g. floor/directions/landmark"
                            className="input input-bordered input-warning w-full my-3 h-28"
                            required
                        />
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl mb-10">
                    <div className="card-body">
                        <h4 className='text-warning text-2xl mb-3'>Payment Details</h4>
                        <div className='flex items-center'>
                            <div className='flex items-center mr-8'>
                                <input
                                    type="radio"
                                    value='COD'
                                    name="payment-type"
                                    className="radio radio-warning mr-2"
                                    onChange={(event) => setPaymentType(event.target.value)}
                                    checked={paymentType === 'COD'}
                                />
                                <p>Cash On Delivery</p>
                            </div>
                            <div className='flex items-center'>
                                <input
                                    type="radio"
                                    value='card'
                                    name="payment-type"
                                    className="radio radio-warning mr-2"
                                    onChange={(event) => setPaymentType(event.target.value)}
                                    checked={paymentType === 'card'}
                                />
                                <p>Card</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className='btn btn-warning text-white w-full rounded-lg'
                    type='submit'
                    onClick={() => dispatch(emptyCart())}
                >
                    Confirm Order
                </button>
            </div >
        </form>
    );
};

export default Order;