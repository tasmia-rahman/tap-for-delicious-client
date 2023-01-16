import React from 'react';
import { HiClock, HiLocationMarker, HiStar } from "react-icons/hi";

const TopRestaurantCard = ({ restaurant }) => {
  const { img, title, type } = restaurant;
  return (

    <div>


      <div className="card w-100 h-100 bg-base-100 shadow-xl">

        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">

          <div className="card-actions justify-between ">
            <div>
              <h2 className="card-title text-2xl font-bold">{title}</h2>
            </div>
            <div className="rating pb-6 mt-1">
              <HiStar className='text-yellow-400'></HiStar>
              <HiStar className='text-yellow-400'></HiStar>
              <HiStar className='text-yellow-400'></HiStar>
              <HiStar className='text-yellow-400'></HiStar>
              <HiStar></HiStar>
            </div>
          </div>


          
          <button className="btn btn-outline btn-warning">{type}</button>
         <div className='mt-1'>
         <div className='card-actions justify-end'>
            <HiClock className='mt-1 '></HiClock>
            <p className='text-red-600'>12:00 am - 11:59 pm</p>
            </div>
           


            <div className='card-actions justify-end'>
              <HiLocationMarker className='mt-1'></HiLocationMarker>
              <p>Mirpur, Dhaka </p>
            </div>
          </div>

          <div className="card-actions justify-end ">
            <button className="btn btn-primary mb-0">More Details</button>
          </div>
        </div>
      </div>
      
    </div>
    
  
    

    



  );
};

export default TopRestaurantCard;