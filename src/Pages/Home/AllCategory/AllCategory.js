
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCategoryDetails from "./AllCategoryDetails";
import AddToCartModal from './AddToCartModal/AddToCartModal';
import { HiLocationMarker } from "react-icons/hi";
import { toast } from "react-hot-toast";

const AllCategory = () => {
  const restaurants = useLoaderData();
  const [foodItem, setFoodItem] = useState({});

  const handlePlaceReview = event => {

    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value}  ${form.lastName.value}`;
    // const email = user?.email || 'unregistered';
    const message = form.message.value;

    const review = {
      //service: _id,
      // serviceName: title,

      customer: name,
      // email,
      message,
    }
    console.log(review)
    
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Review successfully');

          form.reset();
        }
      })
      .catch(er => console.error(er));


  }

  const handleCartModal = item => {
    setFoodItem(item);
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

      </div>
      <div className='flex justify-start ml-3'>
        <HiLocationMarker className='mt-1 text-3xl text-red-800'></HiLocationMarker>
        <p className='text-3xl'>{restaurants.location} </p>
      </div>
      {/* review */}
      <h1 className="text-3xl text-center">Write A Review</h1>
      <form onSubmit={handlePlaceReview} className=" shadow-2xl text-center">
        {/* <h2 className="text-4xl">{title}</h2> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1 m-4 mx-auto'>
          <input name="firstName" type="text" placeholder="First Name" className="input input-ghost input-bordered" /><br />

          <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost input-bordered" /><br />
          {/* <input type="text" placeholder="password" className="input input-bordered" /> */}


          {/* <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost " /> */}
        </div>
        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
        <input className="btn m-2 bg-amber-500 text-black" type="submit" value="Add your review " />
      </form>

      <div className="mt-15">
        {restaurants?.item.map((item, i) => (
          <AllCategoryDetails key={i} item={item} handleCartModal={handleCartModal}></AllCategoryDetails>
        ))}
      </div>

      <AddToCartModal foodItem={foodItem}></AddToCartModal>
    </div>
  );
};

export default AllCategory;
