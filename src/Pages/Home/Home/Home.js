import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import FoodItem from '../FoodItem/FoodItem';
import ClientChoice from '../ClientChoice/ClientChoice';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <Banner />
                <FoodItem></FoodItem>
                <Blog></Blog>
                <ClientChoice></ClientChoice>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;