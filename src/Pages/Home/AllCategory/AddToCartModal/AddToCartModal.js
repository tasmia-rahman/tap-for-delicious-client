import React from 'react';
import { useState } from 'react';
import { RiH1 } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../Redux/Actions/cartAction';
import { toast } from 'react-hot-toast';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const AddToCartModal = ({ foodItem }) => {
    const { image, name, details, price, spice, sugar } = foodItem;

    const [itemQuantity, setItemQuantity] = useState(1);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(foodItem, itemQuantity));
        setItemQuantity(1);
        toast.success('Item added to cart');
    }

    const handleIncreaseQuantity = () => {
        setItemQuantity(itemQuantity + 1);
    }

    const handleDecreaseQuantity = () => {
        if (itemQuantity === 1) {
            return;
        }
        setItemQuantity(itemQuantity - 1);
    }

    return (
        <>
            <input type="checkbox" id="addToCart-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="addToCart-modal" className="btn btn-sm  btn-circle absolute right-2 top-2 border-2 bg-yellow-400 border-yellow-400 bg-transparent text-white hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300">✕</label>
                    <br />
                    <div className='flex justify-between'>
                        <h3 className="font-bold text-2xl">{name}</h3>
                        <p>TK {price}</p>
                    </div>
                    <p className="py-4 text-justify">{details}</p>
                    <div>
                        {spice ? <h1 className='font-semibold text-lg'>Select your spice level</h1> : ""}
                        {spice?.map((spice, i) =>
                            <div key={i} className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text text-base">{spice}</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-amber-500" required />
                                </label>
                            </div>)}

                    </div>
                    <div>
                        {sugar ? <h1 className='font-semibold text-lg'>Select your sweetness level</h1> : ""}
                        {sugar?.map((sugar, i) =>
                            <div key={i} className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text text-base">{sugar}</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-amber-500" required />
                                </label>
                            </div>)}

                    </div>
                    <div>
                        <h5 className="font-semibold text-lg">Special instructions</h5>
                        <p>Any specific preferences? Let the restaurant know.</p>
                        <textarea className="textarea textarea-bordered my-4 w-full h-24 rounded-md" placeholder="e.g. No mayo"></textarea>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <AiOutlineMinus className='text-xl cursor-pointer' onClick={() => handleDecreaseQuantity()}></AiOutlineMinus>
                            <p className='text-xl pb-1 px-2'>{itemQuantity}</p>
                            <AiOutlinePlus className='text-xl cursor-pointer' onClick={() => handleIncreaseQuantity()}></AiOutlinePlus>
                        </div>
                        <label
                            htmlFor="addToCart-modal"
                            className='btn md:w-full md:mx-auto lg:w-10/12 ml-2 border-2 bg-yellow-400 border-yellow-400 bg-transparent text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300'
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddToCartModal;