import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const Restaurants = ({ restaurants }) => {

    return (
        <div className='mt-5'>
            {restaurants ?
                <div className='grid  gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-16'>
                    {restaurants.map((restaurant, i) => <RestaurantCard key={i}
                        res={restaurant}>
                    </RestaurantCard>)}
                </div> :
                ""}
            <Link to='/toprestaurant'> <div className="btn max-w-sm mx-auto flex justify-center mt-16 border-2 border-amber-400 bg-transparent text-amber-500 rounded-2xl hover:bg-amber-400 hover:text-white hover:border-amber-400 text shadow-xl shadow-yellow-400 hover:shadow-yellow-400 duration-300">See All Restaurants</div></Link>

        </div>
    );
};

export default Restaurants;