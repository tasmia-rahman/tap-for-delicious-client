import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Drawer from '../../Shared/TopFoodDetail/AvailableRestaurant/Drawer';
import FoodItemCard from '../FoodItem/FoodItemCard';

const TeamMembers = () => {
    const foodItems=useLoaderData();
    
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
                        key={foodItem._id}
                        foodItem={foodItem}
                    ></FoodItemCard>)
                }
            </div>
        </div>
    </div>
    );
};

export default TeamMembers;