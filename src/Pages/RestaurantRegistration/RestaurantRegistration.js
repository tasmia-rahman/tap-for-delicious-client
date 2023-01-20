import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const RestaurantRegistration = () => {

  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleRestaurantReg = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const restaurantName = form.restaurantName.value;
    const address = form.address.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          console.log(imgData.data.url);

          const seller = {
            image: imgData.data.url,
            name,
            restaurantName,
            address,
            email,
            phone
          }
          // save seller information to the database
          fetch('http://localhost:5000/sellers', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(seller)
          })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              if (result.acknowledged) {
                toast.success('Registered Successfully.');
                navigate('/dashboard/seller');
              }
            })
        }
      })
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
            required
          />
        </div>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your restaurant name?</span>
          </label>
          <input
            type="text"
            name="restaurantName"
            placeholder="Type restaurant name"
            className="input input-bordered input-warning w-full max-w-xs"
            required
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
            required
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
            required
          />
        </div>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your phone number?</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Type your phone number"
            className="input input-bordered input-warning w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control mx-auto mt-4 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Picture upload</span>
          </label>
          <input type="file"
            name="image"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs"
            required />
        </div>

        <button className="btn btn-outline btn-warning max-w-xs block mx-auto mt-5" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RestaurantRegistration;
