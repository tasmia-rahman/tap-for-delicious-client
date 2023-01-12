import React from 'react';
import { FaPlusCircle,FaRegArrowAltCircleRight } from "react-icons/fa";
const FoodItemCard = ({ foodItem }) => {
  const { id, img, price, title, description } = foodItem;
  return (
    <div>
      <div className=" hero rounded-2xl " style={{ backgroundImage: `url(${img})`,height:"380px" }} >
        <div className="card-body rounded-2xl hero-overlay bg-opacity-30">
          <h2 className="card-title text-white">{title}</h2>
          <p className='text-amber-300 font-semibold'>{description}</p>
          <div className="card-actions justify-end">
            <p className='text-amber-300 font-semibold'>$ {price}</p>
         <FaRegArrowAltCircleRight className=' text-amber-400 hover:text-white text-3xl'></FaRegArrowAltCircleRight>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FoodItemCard;