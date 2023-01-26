import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import FoodItem from '../FoodItem/FoodItem';
import Reviews from '../Reviews/Reviews';
import ClientChoice from '../ClientChoice/ClientChoice';
import { BiSearchAlt2 } from 'react-icons/bi'
import TopRestaurant from '../TopRestaurant/TopRestaurant';
import RegisterRes from '../RegisterRes/RegisterRes';
import TopRestaurantCard from '../TopRestaurant/TopRestaurantCard';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {


    const [topRestaurant, setTopRestaurant] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services-limit')
            .then(res => res.json())
            .then(data => setTopRestaurant(data))

    }, [])


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

                <RegisterRes />

                <FoodItem></FoodItem>
                {/* <TopRestaurant></TopRestaurant> */}
                <div className='grid  gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-16'>

                    {
                        topRestaurant.map(restaurant => <TopRestaurantCard
                            key={restaurant._id}
                            restaurant={restaurant}
                        ></TopRestaurantCard>)

                    }


                </div>
                <div className='text-center mt-5'>

                    <Link to='/toprestaurant'>  <button className="btn mr-10 border-2 border-amber-400 bg-transparent text-amber-500 rounded-2xl hover:bg-amber-400 hover:text-white hover:border-amber-400 text">See All Restaurant</button></Link>


                </div>

                <Reviews></Reviews>
                <Blog></Blog>
                <ClientChoice></ClientChoice>
            </div>
        </div>
    );
};

export default Home;