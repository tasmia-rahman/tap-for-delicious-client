import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HiStar } from "react-icons/hi";
import { FaUserCircle } from 'react-icons/fa';




const ReviewsCard = ({ review }) => {
    // const[title]=useLoaderData();
    const { customer, message, restaurantName } = review;

    const { user } = useSelector((state) => state.user);
    // const { title} = review;


    return (
        <div className='text-center'>
            <div className=''>
                {/* review 1 */}
                <div className="group flex flex-col justify-between rounded-sm px-4 py-6 shadow hover:scale-105 duration-500">
                    <div className="rating pb-6">
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar></HiStar>
                    </div>

                    {
                        // review.title &&
                        // <h5 className='font-semibold text-2xl pb-2'>{restaurantName}</h5>

                    }
                    <p className='pb-6'>{message.slice(0, 150)}
                    </p>

                    <div className='flex justify-start'>

                        {user?.photoURL ?
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div> :

                            <div className=''>
                                <h1 className='text-3xl my-6'><FaUserCircle></FaUserCircle></h1>
                            </div>
                        }
                        <div className='pl-6'>
                            <h1 className="font-semibold text-2xl">{user?.displayName}</h1>
                            {/* <p className='font-semibold text-2xl mt-10'>{customer}</p> */}
                        </div>
                        <p className='font-semibold text-xl mt-6'>{customer}</p>


                    </div>


                </div>

            </div>
        </div>

    );
};

export default ReviewsCard;