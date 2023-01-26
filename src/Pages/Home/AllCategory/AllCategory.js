
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCategoryDetails from "./AllCategoryDetails";
import AddToCartModal from './AddToCartModal/AddToCartModal';

const AllCategory = () => {
  const restaurants = useLoaderData();

  const [foodItem, setFoodItem] = useState({});
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleCartModal = item => {
    setFoodItem(item);
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
    <div>
      {/* cover img */}
      <div
        className="bg-fixed md:bg-auto bg-cover bg-center  py-64"
        style={{ backgroundImage: `url(${restaurants.img})` }}
      ></div>

      <div>
        {/* <img className='h-2/4' src={restaurants.img} alt="" /> */}
        <h1 className="text-3xl font-bold mx-5 mt-3">{restaurants.title}</h1>
        <p className="text-xl mx-5">{restaurants.location}</p>
      </div>

      <div className="mt-15">
        {restaurants?.item.map((item, i) => (
          <AllCategoryDetails key={i} item={item} handleCartModal={handleCartModal}></AllCategoryDetails>
        ))}
      </div>

      <AddToCartModal foodItem={foodItem} itemQuantity={itemQuantity} handleIncreaseQuantity={handleIncreaseQuantity}> handleDecreaseQuantity={handleDecreaseQuantity}</AddToCartModal>
    </div>
  );
};

export default AllCategory;
