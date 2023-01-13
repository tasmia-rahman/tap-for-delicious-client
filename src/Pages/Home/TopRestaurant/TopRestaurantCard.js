import React from 'react';
import { HiClock, HiColorSwatch, HiLocationMarker, HiOutlineColorSwatch, HiStar } from "react-icons/hi";

const TopRestaurantCard = ({ restaurant }) => {
  const { img, title, type } = restaurant;
  return (

    <div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">


          <div className="card-actions justify-between px-4">
            <div>
              <h2 className="card-title ">{title}</h2>
            </div>
            <div className="rating pb-6">
              <HiStar className='text-yellow-400'></HiStar>
              <HiStar className='text-yellow-400'></HiStar>
              <HiStar className='text-yellow-400'></HiStar>
              <HiStar className='text-yellow-400'></HiStar>
              <HiStar></HiStar>
            </div>
          </div>

          <p>{type}</p>
          <div className='mt-3'>
            <div className='card-actions justify-end'>
              <HiClock className='mt-1'></HiClock>
              <p>12:00 am - 11:59 pm</p>

            </div>


            <div className='card-actions justify-end'>
              <HiLocationMarker className='mt-1'></HiLocationMarker>
              <p>Mirpur, Dhaka </p>
            </div>
          </div>



          <div className="card-actions justify-end">
            <button className="btn btn-primary">More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurantCard;