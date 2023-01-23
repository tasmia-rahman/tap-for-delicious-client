import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopRestaurantCard from './TopRestaurantCard';


const TopRestaurant = () => {
    const [topRestaurant, setTopRestaurant] = useState([]);
    useEffect(() => {
        fetch('https://tap-for-delicious-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setTopRestaurant(data))

    }, [])

    return (


        <div className='my-44'>
            <h4 className='text-xl text-center my-10 font-medium'>Top Restaurants</h4>
            <h1 className="text-3xl text-center my-5 font-medium">Choose From Most Popular <span className='text-red-600'>Restaurant</span></h1>
            <div className='grid  gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-16'>

                {
                    topRestaurant.map(restaurant => <TopRestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                    ></TopRestaurantCard>)

                }

            </div>
            <div className='text-center mt-5'>

                <button className="btn mr-10 border-2 border-amber-400 bg-transparent text-amber-500 rounded-2xl
                    hover:bg-amber-400 hover:text-white hover:border-yellow-400 text shadow-lg">See All Restaurant</button>


            </div>
        </div>
    );
};

export default TopRestaurant;