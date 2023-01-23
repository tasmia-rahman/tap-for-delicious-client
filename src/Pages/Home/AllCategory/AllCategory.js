import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCategoryDetails from "./AllCategoryDetails";

const AllCategory = () => {
  const restaurants = useLoaderData();

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
        {restaurants?.item.map((restaurant, i) => (
          <AllCategoryDetails key={i} restaurant={restaurant}></AllCategoryDetails>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
