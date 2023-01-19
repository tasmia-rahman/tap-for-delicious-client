import React from 'react';


const AllCategoryDetails = ({restaurants, setRestaurants}) => {
    const {image, name, description, price} = restaurants;
  

    return (
        <div>
             <h1 className="text-3xl">This is AllCategory  Page</h1>
        
              <div className='grid lg:grid-cols-2 w-full p-10'>
                <div className='m-10'>
                    <img className='mx-auto w-full h-full rounded-2xl' src={image} alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-orange-600 m-5'>{name}</h2>
                    <p>{description}</p>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price} </p>

                </div>
            </div>
        </div>
    );
};

export default AllCategoryDetails;