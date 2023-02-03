import React, { useEffect, useState } from 'react';

import FoodItemCard from '../../../Home/FoodItem/FoodItemCard';

import Drawer from './Drawer';

const AvailableRestaurant = () => {
    const [foodItems, setFoodItems] = useState([]);
    useEffect(() => {
        fetch('https://tap-for-delicious-server.vercel.app/topfood')
            .then(res => res.json()
                .then(data => setFoodItems(data)))
    }, [])
    return (
        <div className="lg:grid grid-rows-3 grid-flow-col ">
            <div className="row-span-3">
                <Drawer></Drawer>

            </div>
            <div className="row-span-4  col-span-4">
                <div className='pt-16 mx-6 hidden lg:block'>
                    <img className="w-full" src='https://marketplace.foodotawp.com/wp-content/uploads/2021/05/top-banner_.png' alt='' />
                </div>

                <div className='p-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        foodItems.map(foodItem => <FoodItemCard
                            key={foodItem.id}
                            foodItem={foodItem}
                        ></FoodItemCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableRestaurant;