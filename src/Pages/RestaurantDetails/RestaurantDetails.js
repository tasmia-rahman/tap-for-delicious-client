import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiLocationMarker } from "react-icons/hi";
import { toast } from "react-hot-toast";
import AllCategoryDetails from "../Home/AllCategory/AllCategoryDetails";
import AddToCartModal from '../Home/AllCategory/AddToCartModal/AddToCartModal';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useUser from './../../Hooks/useUser';
import ReportModal from './ReportModal/ReportModal';

const RestaurantDetails = () => {

    const { user } = useContext(AuthContext);

    const { isBuyer, isSeller, isAdmin, buyer } = useUser(user?.email);

    const foods = useLoaderData();

    const resEmail = foods[0]?.resEmail;
    const [foodItem, setFoodItem] = useState({});
    const [itemQuantity, setItemQuantity] = useState(1);

    const handleCartModal = item => {
        if (isBuyer) {
            setFoodItem(item);
        }
        else {
            if (isAdmin || isSeller) {
                toast('You can not add item to cart!');
            }
            else {
                toast('You must log in first!');
            }
        }
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
        fetch(`https://tap-for-delicious-server.vercel.app/restaurant/${resEmail}`)
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
            // service: _id,
            restaurantName: restaurant.title,
            customer: name,
            // email,
            message,
        }
        console.log(review)

        fetch('https://tap-for-delicious-server.vercel.app/reviews', {
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
            <div className='card-bordered'>
                <div
                    className="bg-fixed md:bg-auto bg-cover bg-center  py-64"
                    style={{ backgroundImage: `url(${restaurant.img})` }}
                >
                </div>
                <div className='flex lg:ml-24'>
                    {/* logo for restaurant */}
                    <div className="ml-4 hidden lg:flex">
                        <img src={restaurant.img} className="rounded-t-full" style={{ height: "120px", width: "110px", marginTop: "-20px", border: "2px solid #fff", borderBottom: "0" }} alt='' />
                    </div>
                    <div className=''>
                        <h1 className="text-3xl font-bold mx-5 mt-3">{restaurant.title}</h1>
                        <div className='flex justify-start ml-3'>
                            <HiLocationMarker className='mt-1 text-2xl text-red-800'></HiLocationMarker>
                            <p className='text-2xl text-slate-500 mb-3'>{restaurant.location} </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='grid gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-16'>
                <div className='lg:w-80 lg:ml-12 mx-3'>
                    <div className=' rounded-lg card-bordered p-4'>
                        <h1 className='text-2xl font-bold'>All Details</h1>
                        <div className='flex gap-1 mb-3'>
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "50px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                        </div>
                        <div className='flex gap-2'>
                            <img className='h-[30px]' src='https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/menu-cc.png' alt='' />
                            <p className='text-xl'>Total foods : {foods?.length}</p>
                        </div>
                    </div>
                    <div className='mt-6 rounded-lg card-bordered'>
                        <h1 className="text-2xl font-bold mb-1 ml-3">Advertisement</h1>
                        <div className='flex justify-center mt-2 mb-4'>
                            <img src="https://marketplace.foodotawp.com/wp-content/uploads/2021/03/sd.png" alt="" className='shadow-lg' />
                        </div>
                    </div>
                </div>

                <div class="lg:ml-[-40px] lg:w-[515px] mx-3 mt-5 lg:mt-0"  >
                    <div className=' rounded-t-lg card-bordered px-8 pt-4'>
                        <h1 className='text-2xl font-bold'>Categories</h1>
                        <div className='flex gap-1 mb-3 mt-1'>
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "50px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                        </div>
                    </div>
                    <div>

                        {foods?.map((item, i) => (
                            <AllCategoryDetails key={i} item={item} handleCartModal={handleCartModal}></AllCategoryDetails>
                        ))}
                    </div>
                    {
                        isBuyer && <AddToCartModal foodItem={foodItem} itemQuantity={itemQuantity} handleIncreaseQuantity={handleIncreaseQuantity}> handleDecreaseQuantity={handleDecreaseQuantity}</AddToCartModal>
                    }
                </div>
                <div className='lg:w-80 lg:ml-16 mx-3 lg:mt-0 mt-5'>
                    {/* <h2>Right side</h2> */}
                    {/* review */}
                    <div className='rounded-lg card-bordered px-8 pt-4'>
                        <h1 className='text-2xl font-bold'>Review</h1>
                        <div className='flex gap-1 mb-3 mt-1'>
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "50px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                        </div>
                    </div>
                    <form onSubmit={handlePlaceReview} className="mt-5">

                        <div className="mt-5">

                            <div className="mx-auto ">

                                <div className="card  card-bordered">
                                    <div className="card-body">
                                        <div className="form-control">
                                            <input name='name' type="text" placeholder=" Name" className="input input-bordered" />
                                        </div>

                                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
                                        <div className="form-control mt-6">
                                            <button className="btn max-w-sm mx-auto flex justify-center  border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300">Add your review </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='mt-10 mx-12'>
                        <label htmlFor="report-modal" className='py-2 px-6 border-2 bg-red-600 border-red-600 text-white rounded-2xl hover:bg-base-100 hover:text-red-500 hover:border-red-400 text shadow-sm shadow-red-400 hover:shadow-lg hover:shadow-red-400 duration-300'
                        >
                            Report This Restaurant
                        </label>
                    </div>
                </div>
            </div>
            {
                isBuyer && <ReportModal buyer={buyer} restaurant={restaurant}></ReportModal>
            }
        </div>

    );
};

export default RestaurantDetails;