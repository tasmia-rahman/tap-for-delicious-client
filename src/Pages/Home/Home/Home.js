import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import FoodItem from '../FoodItem/FoodItem';
import Reviews from '../Reviews/Reviews';
import ClientChoice from '../ClientChoice/ClientChoice';
import { BiSearchAlt2 } from 'react-icons/bi'
import TopRestaurant from '../TopRestaurant/TopRestaurant';
import { Link, useLoaderData } from 'react-router-dom';
import TopRestaurantCard from '../TopRestaurant/TopRestaurantCard';

const Home = () => {
  
    const [topRestaurant, setTopRestaurant] = useState([]);
    return (
        <div className='min-h-screen'>
            <div>
                <div className='relative'>
                    <div className='flex justify-center'>
                        <Banner />
                    </div>
                    <div className='absolute top-4 left-[45%] md:top-20 justify-center z-30 flex items-center gap-3'>
                        <input type="text" placeholder="Search" className="input input-sm md:input-md input-bordered input-error w-full max-w-xs" />
                        <div><BiSearchAlt2 className='text-white text-3xl hover:text-4xl' /></div>
                    </div>
                </div>

                <FoodItem></FoodItem>
                <TopRestaurant></TopRestaurant>
                {/* <div className='grid gap-6 grid close-1 md:grid-cols-2 lg:grid-cols-3 mx-6'> */}
                    {/* {
                        topRestaurant.map(restaurant => <TopRestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                        ></TopRestaurantCard>)

                    } */}
                    {/* <Link className='btn btn-secondary'>All Venders</Link> */}
                    {/* <div className='text-center mx-auto mt-5'>
                       <Link className='btn btn-secondary' to='/toprestaurant'>
                       <button className="btn btn-secondary">See All Venders</button>
                       </Link> 
                    </div> */}

                {/* </div> */}

                <Reviews></Reviews>
                <Blog></Blog>
                <ClientChoice></ClientChoice>
            </div>
        </div>
    );
};

export default Home;