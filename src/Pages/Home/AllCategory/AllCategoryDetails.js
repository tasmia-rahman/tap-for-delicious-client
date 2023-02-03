import React from 'react';

const AllCategoryDetails = ({ item, handleCartModal }) => {
    const { image, name, details, price } = item;

    return (

        <div className=''>

            <div className='flex gap-5 items-center w-[600px] '>
                <div className='w-24'>
                    {/* <div className='mask w-24 h-24'>
                        <img className='hover:scale-105 duration-700' src={image} alt="food" />
                    </div> */}
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img className='hover:scale-105 duration-700' src={image} alt="food" />
                        </div>
                    </div>
                </div>
                <div className='flex-start'>
                    <h2 className='text-2xl font-semibold mb-3 '>{name}</h2>
                    <p>{details}</p>
                    <p className='text-red-600 font-semibold'>Price: {price}</p>
                    <div className="card-actions justify-end p-3">
                        <label
                            htmlFor="addToCart-modal"
                            className="btn max-w-sm mx-auto flex justify-center mr-10 border-2 bg-amber-400 border-yellow-400 bg-transparent text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300"
                            onClick={() => handleCartModal(item)}
                        >
                            Add to cart
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategoryDetails;