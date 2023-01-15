import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const FoodItemCard = ({ foodItem }) => {
  const { id, img, price, title, description } = foodItem;
  return (
    <div className=" hero rounded-2xl shadow-xl hover:scale-110 " style={{ backgroundImage: `url(${img})`, height: "380px" }} >
      <div className="card-body rounded-2xl shadow-xl hero-overlay bg-opacity-30">
        <h2 className="card-title text-3xl text-white">{title}</h2>
        <p className='text-amber-300 font-semibold text-xl'>{description}</p>
        <div className="card-actions justify-end">
          <p className='text-amber-300 font-semibold text-xl'>$ {price}</p>
         <Link to="/details"> <FaRegArrowAltCircleRight  className=' text-amber-400 hover:text-white text-4xl'></FaRegArrowAltCircleRight></Link>
        </div>
      </div>
    </div>
  );
};


export default FoodItemCard;