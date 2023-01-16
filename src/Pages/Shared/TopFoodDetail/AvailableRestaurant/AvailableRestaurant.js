import React from 'react';
import TopRestaurant from '../../../Home/TopRestaurant/TopRestaurant';
import Drawer from './Drawer';

const AvailableRestaurant = () => {
    return (
        <div className="lg:grid grid-rows-3 grid-flow-col gap-2 ">
            <div className="row-span-3">
                <Drawer></Drawer>
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