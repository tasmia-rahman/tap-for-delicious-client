import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FoodItemCard = ({ foodItem }) => {

  const { image, price, name, details, restaurant,resEmail } = foodItem;
  return (
    <div className="hero rounded-2xl shadow-xl hover:scale-110 duration-500" style={{ backgroundImage: `url(${image})`, height: "380px" }} >
      <div className="card-body rounded-2xl shadow-xl hero-overlay bg-opacity-30">
        <h2 className="card-title text-3xl text-white">{name}</h2>
        <p className='text-amber-300 font-semibold text-lg'>{details.slice(0, 30)}...</p>
        <div className="card-actions justify-end">
          <p className='text-amber-300 font-semibold text-xl'><span className='text-2xl'>৳</span> {price}</p>
          <Link to={`/details/${resEmail}`}> <FaRegArrowAltCircleRight className=' text-amber-400 hover:text-white text-4xl'></FaRegArrowAltCircleRight></Link>

        </div>
      </div>
      <p className='mt-4 text-white text-center text-lg font-semibold'>{restaurant} Restaurants Products</p>
    </div>
  );
};


export default FoodItemCard;