import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <Banner />
                <Blog></Blog>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;