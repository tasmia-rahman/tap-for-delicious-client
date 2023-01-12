import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import FoodItem from '../FoodItem/FoodItem';
import Reviews from '../Reviews/Reviews';
import TopRestaurant from '../TopRestaurant/TopRestaurant';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <Banner />
                <TopRestaurant></TopRestaurant>
                <FoodItem></FoodItem>
                <Reviews></Reviews>
                <Blog></Blog>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;