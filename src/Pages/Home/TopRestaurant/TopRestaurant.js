import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import TopRestaurantCard from './TopRestaurantCard';


const TopRestaurant = () => {

    const { data: restaurants, refetch, isFetching } = useQuery({
        queryKey: ["restaurants"],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/restaurants',)
                const data = await res.json();
                return data;
            }
            catch (err) {

            }
        }
    })
    // const [topRestaurant, setTopRestaurant] = useState([]);
    // useEffect(() => {
    //     fetch('https://tap-for-delicious-server.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setTopRestaurant(data))

    // }, [])


    return (

        <div className='mb-16'>
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/modern-design-club-restaurant-bar-indoors_530697-26350.jpg?size=626&ext=jpg&uid=R91043052&ga=GA1.2.233135277.1674674657&semt=ais" alt="/" className="w-full h-72" h />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                </div>
            </div>
            <h4 className='text-xl text-center my-10 font-medium'>All Restaurants</h4>
            <h1 className="text-3xl text-center my-5 font-medium">Choose From Most Popular <span className='text-red-600'>Restaurant</span></h1>
            <div className='grid  gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-16'>

                {
                    restaurants.map(restaurant => <TopRestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                    ></TopRestaurantCard>)

                }

            </div>

        </div>
    );
};

export default TopRestaurant;