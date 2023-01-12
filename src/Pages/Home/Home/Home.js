import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import FoodItem from '../FoodItem/FoodItem';
import Reviews from '../Reviews/Reviews';
import { BiSearchAlt2 } from 'react-icons/bi'
const Home = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <div className='relative'>
                    <Banner />
                    <div className='absolute top-20 left-[45%] z-30 flex items-center gap-3'>
                        <input type="text" placeholder="Search" className="input input-bordered input-error w-full max-w-xs" />
                        <div><BiSearchAlt2 className='text-white text-3xl hover:text-4xl' /></div>
                    </div>
                </div>
                <FoodItem></FoodItem>
                <Reviews></Reviews>
                <Blog></Blog>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;