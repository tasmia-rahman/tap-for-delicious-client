import React, { useEffect, useState } from 'react';
import FoodItemCard from './FoodItemCard';

const FoodItem = () => {
    const [foodItems, setFoodItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/topfood-limit')
            .then(res => res.json()
                .then(data => setFoodItems(data)))
    }, [])
    return (
        <div className='mx-10 mt-16'>
            <div>
                <div className='text-center mb-4'>
                    <p className="font-bold pb-5 ">Top Foods</p>
                    <p className="  font-semibold text-4xl pb-4  ">More Than <span className='text-red-600'>10,000</span> Items To Orders!</p>
                </div>
                <div className='p-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
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

export default FoodItem;