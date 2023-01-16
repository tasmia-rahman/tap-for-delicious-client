import React from 'react';
import TopRestaurant from '../../../Home/TopRestaurant/TopRestaurant';

const AvailableRestaurant = () => {
    return (
        <div className="lg:grid grid-rows-3 grid-flow-col gap-4 ">
            <div className="row-span-3 ...">
                <div className=" shadow-lg h-full w-80 ">
                    <div className="p-8">
                        <h3 className='text-2xl font-semibold'>Filters</h3>
                        <div className='flex justify-between my-6'>
                            <h3>Near By Me</h3>
                            <input type="checkbox" className="toggle toggle-warning" checked />
                        </div>
                        <div className='flex justify-between'>
                            <p>Pickup</p>
                            <input type="checkbox" className="toggle toggle-warning" checked />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-span-4  col-span-4 ...">
                <h2 className='text-center text-4xl'>Eita final design na!!!!!!!!!!!! </h2>
                <TopRestaurant></TopRestaurant></div>
        </div>
    );
};

export default AvailableRestaurant;