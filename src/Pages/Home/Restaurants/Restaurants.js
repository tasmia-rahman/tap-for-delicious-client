import React from 'react';
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
        </div>
    );
};

export default Restaurants;