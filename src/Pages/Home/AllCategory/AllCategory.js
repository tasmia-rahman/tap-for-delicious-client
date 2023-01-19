import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoryDetails from './AllCategoryDetails';

const AllCategory = () => {
    const restaurants = useLoaderData();
    const [restaurant, setRestaurant] = useState([null]);
   
    return (
        <div>
           
            {/* {
                restaurants.item.map(restaurant=><AllCategoryDetails
                key={restaurant.id}
                restaurant={restaurant}
                setRestaurant={setRestaurant}

                ></AllCategoryDetails>)
            } */}
           
        </div>
    );
};

export default AllCategory;