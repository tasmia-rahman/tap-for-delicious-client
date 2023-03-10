import React from 'react';

const AllCategoryDetails = ({ item, handleCartModal }) => {
    const { image, name, details, price } = item;

    return (

        <div className='mb-5'>

            <div className='flex gap-5 justify-start '>
                <div className='w-full card card-body card-bordered rounded-none mt-3'>
                    <div className=''>


                        {/* <div className='mask w-24 h-24'>
                        <img className='hover:scale-105 duration-700' src={image} alt="food" />
                    </div> */}

                        <img className='hover:scale-105 duration-700' style={{ width: "450px", height: "" }} src={image} alt="food" />

                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-3 '>{name}</h2>
                        <p>{details}</p>
                        <p className='text-red-600 font-semibold'>Price: {price}</p>
                    </div>
                    <div className='w-full'>
                        <div>
                            <label
                                htmlFor="addToCart-modal"
                                className="btn w-[150px] mx-auto flex justify-center border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300"
                                onClick={() => handleCartModal(item)}
                            >
                                Add to cart
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategoryDetails;