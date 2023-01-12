import React, { useEffect, useState } from 'react';
import FoodItemCard from './FoodItemCard';

const FoodItem = () => {
    const [foodItems, setFoodItems] = useState([]);
    useEffect(() => {
        fetch('foodItems.json')
            .then(res => res.json()
                .then(data => setFoodItems(data)))
    }, [])
    return (
        <div className='mx-10 my-10'>
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl  font-bold text-yellow-600">Top Foods</p>
                <p className="text-yellow-600 mt-3 mb-7 text-4xl">More Than <span className='text-red-600'>10,000</span> Items To Orders!</p>
            </div>
            <div className='gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
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

export default FoodItem;