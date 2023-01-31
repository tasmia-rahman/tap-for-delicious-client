import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CartAmountToggle = ({ itemQuantity, handleIncreaseQuantity, handleDecreaseQuantity }) => {
    return (
        <div>
            <div className='flex items-center'>
                <AiOutlineMinus className='text-xl cursor-pointer' onClick={() => handleDecreaseQuantity()}></AiOutlineMinus>
                <p className='text-xl pb-1 px-2'>{itemQuantity}</p>
                <AiOutlinePlus className='text-xl cursor-pointer' onClick={() => handleIncreaseQuantity()}></AiOutlinePlus>
            </div>
        </div>
    );
};

export default CartAmountToggle;