import React from 'react';
import { useSelector } from 'react-redux';
import { HiStar } from "react-icons/hi";
import { FaRegUser } from 'react-icons/fa';

const ReviewsCard = ({review}) => {

    const { currentUser } = useSelector((state) => state.user);
    const{customer, message,title}=review;

    return (
        <div className='text-center'>
            <div className=''>
                {/* review 1 */}
                <div className="group flex flex-col justify-between rounded-sm px-4 py-6 shadow hover:scale-110 duration-500">
                    <div className="rating pb-6">
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar></HiStar>
                    </div>
                    <h5 className='font-semibold text-2xl pb-2'>{title}</h5>
                    <p className='pb-6'>{message}
                    </p>
                    {/* <div className='flex'>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://template.appdevs.net/xfood/assets/images/body/client-1.jpg" alt='' />
                            </div>
                        </div>
                        <div className='pl-6'>
                            <h4 className='font-semibold text-2xl'>Alex Doe</h4>
                            <p>Master Chef</p>
                        </div>
                    </div> */}
                    <div className='flex justify-start'>

                        {currentUser?.photoURL ? <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={currentUser?.photoURL} alt="" />
                            </div>
                        </div> :
                           
                             <div className=''>
                                <h1 className='text-2xl my-10'><FaRegUser></FaRegUser></h1>
                            </div>
                        }
                        <div className='pl-6'>
                            <h1 className="font-semibold text-2xl">{currentUser?.displayName}</h1>
                            {/* <p className='font-semibold text-2xl mt-10'>{customer}</p> */}
                        </div>
                        <p className='font-semibold text-xl mt-7'>{customer}</p>

                       
                            </div>

                    </div>

                </div>
            </div>
       
    );
};

export default ReviewsCard;