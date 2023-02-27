import React from 'react';
import { HiStar } from "react-icons/hi";
import { FaUserCircle } from 'react-icons/fa';


const ReviewsCard = ({ review }) => {
    // const[title]=useLoaderData();
    const {customer, message , photoUrl} = review;
    

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

                    <p className='pb-6'>{message.slice(0, 150)}
                    </p>

                    <div className='flex gap-2 items-center justify-start'>

                        {photoUrl ?
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={photoUrl} alt="" />
                                </div>
                            </div> :

                            <div className='pr-6'>
                                <h1 className='text-3xl my-6'><FaUserCircle></FaUserCircle></h1>
                            </div>
                        }
                        {/* <div className='pl-6'>
                            <h1 className="font-semibold text-2xl">{user?.displayName}</h1>
                            <p className='font-semibold text-2xl mt-10'>{customer}</p>
                        </div> */}
                        <p className='font-semibold text-xl'>{customer}</p>


                    </div>


                </div>

            </div>
        </div>

    );
};

export default ReviewsCard;