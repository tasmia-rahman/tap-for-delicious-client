import React from 'react';
import { useQuery } from 'react-query';
import TopRestaurantCard from './TopRestaurantCard';


const TopRestaurant = () => {

    const { data: restaurants } = useQuery({
        queryKey: ["restaurants"],
        queryFn: async () => {
            try {
                const res = await fetch('https://tap-for-delicious-server.vercel.app/restaurants',)
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }
    })


    return (

        <div className='mb-16'>
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.pinimg.com/originals/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg" alt="/" className="w-full h-80 mt-1" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                </div>
            </div>
            <h4 className='text-xl text-center my-10 font-medium'>All Restaurants</h4>
            <h1 className="text-3xl text-center my-5 font-medium">Choose From Most Popular <span className='text-red-600'>Restaurant</span></h1>
            <div className='grid  gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-16'>

                {
                    restaurants?.map(restaurant => <TopRestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                    ></TopRestaurantCard>)

                }

            </div>

        </div>
    );
};

export default TopRestaurant;