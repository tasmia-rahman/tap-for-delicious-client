import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoryDetails from './AllCategoryDetails';

const AllCategory = () => {
    const restaurants = useLoaderData();
   
   
    return (
        <div>
           <div>
           <img className='h-2/4' src={restaurants.img} alt="" />
            <h1 className='text-3xl font-bold'>{restaurants.title}</h1>
           </div>
           
            {
                restaurants?.item.map(restaurant=><AllCategoryDetails
                key={restaurant._id}
                restaurant={restaurant}
               
                ></AllCategoryDetails>)
            }
           
        </div>
    );
};

export default AllCategory;