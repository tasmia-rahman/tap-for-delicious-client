import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import FoodItem from '../FoodItem/FoodItem';
import Reviews from '../Reviews/Reviews';
import ClientChoice from '../ClientChoice/ClientChoice';
import { BiSearchAlt2 } from 'react-icons/bi'

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <div className='relative'>
                    <Banner />
                    <div className='absolute top-4 left-[45%] md:top-20 justify-center z-30 flex items-center gap-3'>
                        <input type="text" placeholder="Search" className="input input-sm md:input-md input-bordered input-error w-full max-w-xs" />
                        <div><BiSearchAlt2 className='text-white text-3xl hover:text-4xl' /></div>
                    </div>
                </div>
                <FoodItem></FoodItem>
                <Reviews></Reviews>
                <Blog></Blog>
                <ClientChoice></ClientChoice>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;