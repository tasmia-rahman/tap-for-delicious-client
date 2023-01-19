import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoryDetails from './AllCategoryDetails';

const AllCategory = () => {
    const {title,img} = useLoaderData();
    const [restaurants, setRestaurants] = useState([null]);
   
    return (
        <div>
           <div>
           <img className='h-2/4' src={img} alt="" />
            <h1 className='text-3xl font-bold'>{title}</h1>
           </div>
           
            {
                restaurants.item?.map(restaurant=><AllCategoryDetails
                key={restaurant.id}
                restaurant={restaurant}
                setRestaurants={setRestaurants}

                ></AllCategoryDetails>)
            }
           
        </div>
    );
};

export default AllCategory;