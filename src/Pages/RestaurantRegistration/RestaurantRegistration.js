import React from "react";

const RestaurantRegistration = () => {

    const handleRestaurantReg = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const restaurant = form.restaurant.value;
        const address = form.address.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const img = form.picture.value;
        console.log(name, restaurant, address, email, phone)
    }

  return (
    <div className="mb-20">
      <h1 className="text-4xl m-5">Registration Your Restaurant.</h1>
      <form onSubmit={handleRestaurantReg}>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type Your Name"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </div>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your restaurant name?</span>
          </label>
          <input
            type="text"
            name="restaurant"
            placeholder="Type restaurant name"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </div>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your restaurant address?</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Type restaurant address"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </div>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </div>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your phone number?</span>
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Type your phone number"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </div>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Picture upload</span>
          </label>
          <input type="file"
          name="picture"
          className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
        </div>
        

        <button className="btn btn-outline btn-warning max-w-xs block mx-auto mt-5" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RestaurantRegistration;
