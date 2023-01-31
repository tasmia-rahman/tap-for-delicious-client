import React from 'react';
import { HiClock, HiLocationMarker, HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';

const TopRestaurantCard = ({ restaurant }) => {
  const { _id, img, title, type, time, location, email } = restaurant;

  return (

    <div>

      <div className="card w-full lg:max-w-96 h-[500px] mx-auto bg-base-100 shadow-xl">

        <figure><img src={img} alt="restaurants" className='hover:scale-110 duration-700' /></figure>
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

          <div className="form-control mt-6">
            <h1 className="btn btn-outline btn-warning">{type}</h1>
          </div>
          <div className='mt-1'>
            <div className='card-actions justify-end'>
              <HiClock className='mt-1 text-green-600'></HiClock>
              <p className='text-red-600'>{time}</p>

            </div>

            <div className='card-actions justify-end'>
              <HiLocationMarker className='mt-1 text-red-800'></HiLocationMarker>
              <p>{location} </p>
            </div>
          </div>

          <div className="card-actions justify-end ">

            <Link to={`/allcategory/${_id}`}>  <button className='btn mr-10 border-2 border-amber-400 bg-transparent text-amber-500 rounded-2xl
                    hover:bg-amber-400 hover:text-white hover:border-amber-400 text'>more Details </button></Link>

          </div>
        </div>
      </div>

    </div>



  );
};

export default TopRestaurantCard;