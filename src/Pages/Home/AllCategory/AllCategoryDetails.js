import React from 'react';

const AllCategoryDetails = ({ item, handleCartModal }) => {
    const { image, name, details, price } = item;

    return (

        <div className=''>

            <div className='flex gap-5 justify-start w-[600px] '>
                <div className='w-25'>
                    <div className='mask w-24 h-24'>
                        <img className='hover:scale-105 duration-700' src={image} alt="food" />
                    </div>
                </div>
                <div className='flex-start'>
                    <h2 className='text-2xl font-semibold mb-3 '>{name}</h2>
                    <p>{details}</p>
                    <p className='text-red-600 font-semibold'>Price: {price}</p>
                    <div className="card-actions justify-end p-3">
                        <label
                            htmlFor="addToCart-modal"
                            className="btn btn-warning"
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