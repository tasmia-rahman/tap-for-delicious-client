import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoryDetails from './AllCategoryDetails';

const AllCategory = () => {
    const restaurants = useLoaderData();
   
   
    return (
        <div>
          
           <div>
           <img className='h-2/4' src={restaurants.img} alt="" />
           <h1 className='text-3xl font-bold mx-5 '>{restaurants.title}</h1>
            <p className='text-xl mx-5'>{restaurants.location}</p>
           </div>
           
           <div className='mt-15'>
           {
                restaurants?.item.map(restaurant=><AllCategoryDetails
               
                restaurant={restaurant}
               
                ></AllCategoryDetails>)
                
              
            }
           </div>
           
           
        </div>
    );
};

export default AllCategory;