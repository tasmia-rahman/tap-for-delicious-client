import React, { useContext, useState } from "react";
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
    const name = `${form.name.value}`;
      // const email = name || 'unregistered';
    const message = form.message.value;

    const review = {
      //service: _id,
      // serviceName: title,

      customer: name,
      // email,
      message,
    }
    console.log(review)

    
    fetch('https://tap-for-delicious-server.vercel.app/reviews', {
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
      <form onSubmit={handlePlaceReview} className="w-96 mx-auto mt-5">

        <div className="mt-5">

          <div className="mx-auto mt-5">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">

                  <input name='name' type="text" placeholder=" Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                     
                      </div>

                <div className="form-control">

                  {/* <input name="restaurants" type="text" placeholder="Restaurants Name" defaultValue={name} className="input input-ghost " /> */}

                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="text your message"></textarea>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add your review </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
