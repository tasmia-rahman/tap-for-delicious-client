import React from 'react';
import { HiStar } from "react-icons/hi";
import {useEffect, useState } from 'react';
import './Reviews.css';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then(res=>res.json())
        .then(data=>setReviews(data))

    },[])
   
    
    return (
        <section className='my-44 mx-10'>
            <div className='text-center'>
                <h6 className='font-bold pb-5'>Satisfied Clients</h6>
                <h3 className='font-semibold text-4xl pb-4'>What Our <span className='text-red-600'>Clients</span> Say</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-10 mx-auto px-5'>
                {/* review 1 */}
                {/* <div className="group flex flex-col justify-between rounded-sm px-4 py-6 shadow hover:scale-110 duration-500">
                    <div className="rating pb-6">
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar className='text-yellow-400'></HiStar>
                        <HiStar></HiStar>
                    </div>
                    <h5 className='font-semibold text-2xl pb-2'>Great Fast Reliable Service</h5>
                    <p className='pb-6'>Love xFood. Just ordered some grub, and I tell you,
                        you folks make that part of my life easy. Thanks!
                    </p>
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://template.appdevs.net/xfood/assets/images/body/client-1.jpg" alt='' />
                            </div>
                        </div>
                        <div className='pl-6'>
                            <h4 className='font-semibold text-2xl'>Alex Doe</h4>
                            <p>Master Chef</p>
                        </div>
                    </div>
                </div> */}
                {
                    reviews.map(review=><ReviewsCard
                    key={review._id}
                    review={review}
                    ></ReviewsCard>)
                }
               
             
              
            </div>
        </section>
    );
};

export default Reviews;