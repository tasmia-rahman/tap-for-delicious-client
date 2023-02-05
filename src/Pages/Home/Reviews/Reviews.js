import React from 'react';
import { HiStar } from "react-icons/hi";
import { useEffect, useState } from 'react';
import './Reviews.css';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://tap-for-delicious-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])


    return (
        <section className='my-44 mx-10'>
            <div className='text-center'>
                <h6 className='font-bold pb-5'>Satisfied Clients</h6>
                <h3 className='font-semibold text-4xl pb-4'>What Our <span className='text-red-600'>Clients</span> Say</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-10 mx-auto px-5'>

                {
                    reviews.map(review => <ReviewsCard
                        key={review._id}
                        review={review}
                    ></ReviewsCard>)
                }



            </div>
        </section >
    );
};

export default Reviews;