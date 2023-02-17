import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useUser from '../../Hooks/useUser';
import { emptyCart } from '../../Redux/Actions/cartAction';

const CheckoutForm = ({ total, foodName, _id }) => {

    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();


    // start//////////////////////////////
    const [deliveryOption, setDeliveryOption] = useState(false);
    const [paymentType, setPaymentType] = useState('COD');


    console.log("checkout", user.email)
    const [userData, setUserData] = useState({});

    const url = `https://tap-for-delicious-server.vercel.app/user/${user?.email}`;

    console.log(url)

    useEffect(() => {
        fetch(`https://tap-for-delicious-server.vercel.app/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }
        , [user?.email])

    console.log(userData)
    // const { road, house, area, postal } = userData
    // console.log(userData);

    const { buyer } = useUser(user?.email);

    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    console.log(cartItems);

    let subtotal = 0;

    cartItems.forEach(cartItem => {
        subtotal = subtotal + parseFloat(cartItem.totalPrice);
    });

    const payable = subtotal + 60 + 3;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showCards, setShowCards] = useState(false)

    const showCard = (value) => {
        if (value === 'card') {
            setShowCards(true)
        } else {
            setShowCards(false)
        }
    }


    useEffect(() => {
        fetch("https://tap-for-delicious-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ total }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [total]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        // start///////
        event.preventDefault()

        const form = event.target;
        const road = form.road.value;
        const house = form.house.value;
        const area = form.area.value;
        const postalCode = form.postalCode.value;
        const note = form.note.value;
        const phone = form.phone.value;

        const order = {
            buyerUid: user?.uid,
            buyerId: buyer?._id,
            buyerName: buyer?.displayName,
            buyerEmail: buyer?.email,
            phone: phone,
            cartItems,
            restaurantName: cartItems[0].restaurant,
            road,
            house,
            area,
            postalCode,
            note,
            deliveryOption,
            payable,
            paymentType,
            orderStatus: 'Order Placed'
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

                    // save top food information to the database
                    if (cartItems.length === 1) {
                        saveTopFoods(cartItems[0]);
                    }
                    else {
                        cartItems.forEach(cartItem => {
                            console.log('cartItem', cartItem);
                            saveTopFoods(cartItem);
                        });
                    }

                    dispatch(emptyCart());
                    navigate('/');
                }
            })



        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: foodName
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            //  setSuccess('Congrats! your payment completed');
            //  setTransactionId(paymentIntent.id);
            // store payment info in the database
            const payment = {
                total,
                transactionId: paymentIntent.id,
                foodName,
                orderId: _id

            }
            fetch('https://tap-for-delicious-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);
    }
    // start////////////////////////
    const saveTopFoods = cartItem => {
        try {
            fetch('https://tap-for-delicious-server.vercel.app/topFoods', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
        catch (error) {

        }
    }




    return (
        <>
            <form onSubmit={handleSubmit} className="lg:grid md:grid grid-cols-2 gap-6">
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
                            name="phone"
                            placeholder="Contact No."
                            defaultValue={userData.phone}
                            className="input input-bordered input-warning w-full my-3"
                            required
                        />
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
                        />
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl mb-10 ">
                        <div className="card-body">
                            <h4 className='text-warning text-2xl mb-3'>Payment Details</h4>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center mr-8'>
                                    <input
                                        type="radio"
                                        value='COD'
                                        name="payment-type"
                                        className="radio radio-warning mr-2"
                                        onChange={(event) => setPaymentType(event.target.value)}
                                        checked={paymentType === 'COD'}
                                        onClick={(e) => showCard(e.target.value)}
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
                                        onClick={(e) => showCard(e.target.value)}
                                    />
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* akdjfg;ljgd */}
                    {showCards ? <>
                        <div className="p-8 rounded-3xl bg-base-100 shadow-xl mb-10">
                            <h3 className='text-2xl text-warning'>Please Complete your order</h3>
                            <p className='text-lg mb-3'>Your order is <strong>{foodName}</strong> & Payable amount is <strong>৳ {total}</strong></p>
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}

                            />
                            <button className='btn btn-sm mt-4 btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>
                                Pay
                            </button>
                            <p className='text-red-500'>{cardError}</p>
                            {
                                success && <div>
                                    <p className='text-green-500'>{success}</p>
                                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                                </div>
                            }
                        </div>

                    </> : <button
                        className='btn border-2 bg-amber-400 border-amber-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 w-full'
                        type='submit'
                    >
                        Confirm Order
                    </button>}
                </div>
            </form>


        </>
    );
};

export default CheckoutForm;