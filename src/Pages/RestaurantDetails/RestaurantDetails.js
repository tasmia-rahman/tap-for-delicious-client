import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HiLocationMarker } from "react-icons/hi";
import { toast } from "react-hot-toast";
import AllCategoryDetails from "../Home/AllCategory/AllCategoryDetails";
import AddToCartModal from '../Home/AllCategory/AddToCartModal/AddToCartModal';

const RestaurantDetails = () => {

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
        const name = `${form.firstName.value}  ${form.lastName.value}`;
        // const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            //service: _id,
            // serviceName: title,

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
            <h1 className="text-3xl text-center">Write A Review</h1>
            <form onSubmit={handlePlaceReview} className=" shadow-2xl text-center">
                {/* <h2 className="text-4xl">{title}</h2> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1 m-4 mx-auto'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost input-bordered" /><br />

                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost input-bordered" /><br />
                    {/* <input type="text" placeholder="password" className="input input-bordered" /> */}


                    {/* <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost " /> */}
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
                <input className="btn m-2 bg-amber-500 text-black" type="submit" value="Add your review " />
            </form>
            <h1>Restaurant name: {restaurant.title}</h1>
            Tolal foods : {foods?.length}

            <div className="mt-15">
                {foods.map((item, i) => (
                    <AllCategoryDetails key={i} item={item} handleCartModal={handleCartModal}></AllCategoryDetails>
                ))}
            </div>
            <AddToCartModal foodItem={foodItem} itemQuantity={itemQuantity} handleIncreaseQuantity={handleIncreaseQuantity}> handleDecreaseQuantity={handleDecreaseQuantity}</AddToCartModal>

        </div>
    );
};

export default RestaurantDetails;