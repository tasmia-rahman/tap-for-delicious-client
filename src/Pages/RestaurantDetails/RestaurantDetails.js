import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HiLocationMarker } from "react-icons/hi";
import { toast } from "react-hot-toast";
import AllCategoryDetails from "../Home/AllCategory/AllCategoryDetails";
import AddToCartModal from '../Home/AllCategory/AddToCartModal/AddToCartModal';

const RestaurantDetails = () => {

    const [_id, title] = useLoaderData();

    const foods = useLoaderData();
    const resEmail = foods[0]?.resEmail;
    const [foodItem, setFoodItem] = useState({});
    const [itemQuantity, setItemQuantity] = useState(1);

    const handleCartModal = item => {
        setFoodItem(item);
    }

    const handleIncreaseQuantity = () => {
        setItemQuantity(itemQuantity + 1);
    }

    const handleDecreaseQuantity = () => {
        if (itemQuantity === 1) {
            return;
        }
        setItemQuantity(itemQuantity - 1);
    }


    const [restaurant, setRestaurant] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/restaurant/${resEmail}`)
            .then(res => res.json())

            .then(data => setRestaurant(data))
    }, [resEmail])

    console.log(restaurant);

    const handlePlaceReview = event => {

        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const title = `${form.restaurant.value}`;
        // const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            restaurantName: title,

            customer: name,
            // email,
            message,
        }
        console.log(review)

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review successfully');

                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
            <div
                className="bg-fixed md:bg-auto bg-cover bg-center  py-64"
                style={{ backgroundImage: `url(${restaurant.img})` }}
            >

            </div>

            <div>
                {/* <img className='h-2/4' src={restaurants.img} alt="" /> */}
                <h1 className="text-3xl font-bold mx-5 mt-3">{restaurant.title}</h1>

            </div>
            <div className='flex justify-start ml-3'>
                <HiLocationMarker className='mt-1 text-3xl text-red-800'></HiLocationMarker>
                <p className='text-3xl'>{restaurant.location} </p>
            </div>
            {/* review */}


            <div className='text-2xl font-semibold text-center mt-20 mb-3'>All Available Items</div>
            <div className="mt-15">
                {foods.map((item, i) => (
                    <AllCategoryDetails key={i} item={item} handleCartModal={handleCartModal}></AllCategoryDetails>
                ))}
            </div>
            <AddToCartModal foodItem={foodItem} itemQuantity={itemQuantity} handleIncreaseQuantity={handleIncreaseQuantity}> handleDecreaseQuantity={handleDecreaseQuantity}</AddToCartModal>


            <h1 className="text-3xl text-center mt-20">Write A Review</h1>
            <form onSubmit={handlePlaceReview} className="w-96 mx-auto mt-5 mb-20">

                <div className="mt-5">

                    <div className="mx-auto mt-5">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">

                                    <input name='name' type="text" placeholder=" Name" className="input input-bordered" />
                                </div>

                                {/* <div className="form-control">
                                <input name='restaurant' type="text" placeholder=" restaurantName" className="input input-bordered" />

                                </div> */}

                                <div className="form-control">

                                    {/* <input name="restaurants" type="text" placeholder="Restaurants Name" defaultValue={name} className="input input-ghost " /> */}

                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
                                <div className="form-control mt-6">
                                    <button className="btn max-w-sm mx-auto flex justify-center border-2 bg-amber-400 border-yellow-400 bg-transparent text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300">Add your review </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>


            <h1>Restaurant name: {restaurant.title}</h1>
            Tolal foods : {foods?.length}

            <div className="mt-15">
                {foods?.map((item, i) => (
                    <AllCategoryDetails key={i} item={item} handleCartModal={handleCartModal}></AllCategoryDetails>
                ))}
            </div>
            <AddToCartModal foodItem={foodItem} itemQuantity={itemQuantity} handleIncreaseQuantity={handleIncreaseQuantity}> handleDecreaseQuantity={handleDecreaseQuantity}</AddToCartModal>


        </div>
    );
};

export default RestaurantDetails;