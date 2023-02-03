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
        // const title = `${form.restaurant.value}`;
        // const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            restaurantName: restaurant.title,
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

                <h1 className="text-3xl font-bold mx-5 mt-3">{restaurant.title}</h1>

            </div>
            <div className='flex justify-start ml-3'>
                <HiLocationMarker className='mt-1 text-3xl text-red-800'></HiLocationMarker>
                <p className='text-3xl'>{restaurant.location} </p>
            </div>


            {/* review */}
            <div className='flex gap-5 flex-cols-1 md:flex-1 lg:flex-3 m-8 '>
                <div className='w-1/4 text-center shadow-2xl'>
                    <div>
                        <h1 className='text-2xl text-yellow-400 font-semibold mb-3'>Restaurant Name & Total Food </h1>
                    </div>
                    <h1 className='text-xl'>Restaurant name: {restaurant.title}</h1>
                    <p className='text-xl'>Tolal foods : {foods?.length}</p>
                    <div className='mt-8'>
                        <h1 className="text-3xl mb-3">Advertisement</h1>
                        <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/sd.png" alt="" />
                    </div>
                </div>
                <div class="w-1/2  text-center">
                    <h1 className="text-3xl text-yellow-400 font-semibold mb-5">All Items</h1>
                    <div className="mt-15 ">
                        {foods?.map((item, i) => (
                            <AllCategoryDetails key={i} item={item} handleCartModal={handleCartModal}></AllCategoryDetails>
                        ))}
                    </div>
                    <AddToCartModal foodItem={foodItem} itemQuantity={itemQuantity} handleIncreaseQuantity={handleIncreaseQuantity}> handleDecreaseQuantity={handleDecreaseQuantity}</AddToCartModal>

                </div>
                <div className='w-1/4 text-center'>
                    {/* <h2>Right side</h2> */}
                    <h1 className="text-3xl text-center text-yellow-400">Write A Review</h1>
                    <form onSubmit={handlePlaceReview} className="w-96 mx-auto mt-5">

                        <div className="mt-5">

                            <div className="mx-auto mt-5">

                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                                    <div className="card-body">
                                        <div className="form-control">

                                            <input name='name' type="text" placeholder=" Name" className="input input-bordered" />
                                        </div>

                                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Add your review </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>


                </div>

            </div>
        </div>


    );
};

export default RestaurantDetails;