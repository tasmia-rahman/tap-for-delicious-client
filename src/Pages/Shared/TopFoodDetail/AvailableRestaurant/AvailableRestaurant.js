import React from 'react';
import TopRestaurant from '../../../Home/TopRestaurant/TopRestaurant';

const AvailableRestaurant = () => {
    return (
        <div className="lg:grid grid-rows-3 grid-flow-col gap-2 ">
            <div className="row-span-3">
                <div className='lg:flex h-full w-full'>
                    <div className="py-8 pl-6">
                        <div className="">
                            <h3 className='text-2xl font-semibold mb-2'>Filters</h3>
                            <hr style={{color:"yellow",width:"40px",fontFamily:"bolder"}}/>
                            <div className='flex gap-11 justify-between my-6'>
                                <h3>Near By Me</h3>
                                <input type="checkbox" className="toggle toggle-warning" />
                            </div>
                            <div className='flex justify-between my-3'>
                                <p>Delivery</p>
                                <input type="checkbox" className="toggle toggle-warning" />
                            </div>
                            <div className='flex justify-between'>
                                <p>Pickup</p>
                                <input type="checkbox" className="toggle toggle-warning" />
                            </div>
                        </div>
                        <div className='my-6' >
                            <img src='https://marketplace.foodotawp.com/wp-content/uploads/2021/04/BuffetFood.jpg' alt='' />
                        </div>
                    </div>
                    <div className="divider divider-horizontal hidden lg:flex"></div>
                </div>
            </div>
            <div className="row-span-4  col-span-4 ...">
                <div className='pt-16 mx-6 hidden lg:block'>
                    <img className="w-full" src='https://marketplace.foodotawp.com/wp-content/uploads/2021/05/top-banner_.png' alt='' />
                </div>
                <TopRestaurant></TopRestaurant></div>
        </div>
    );
};

export default AvailableRestaurant;