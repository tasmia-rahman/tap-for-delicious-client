import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { Player } from "@lottiefiles/react-lottie-player";

const RestaurantRegistration = () => {
  const [error, setError] = useState("");
  const auth = getAuth(app);

  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleRestaurantReg = (event) => {
    event.preventDefault();
    setError("");

    const form = event.target;
    const name = form.name.value;
    const restaurantName = form.restaurantName.value;
    const address = form.address.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);

          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log(userCredential.user);
              const user = {
                image: imgData.data.url,
                name,
                restaurantName,
                address,
                email,
                phone,
                role: "seller",
              };
              // save seller information to the database
              fetch("https://tap-for-delicious-server.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  if (result.acknowledged) {
                    toast.success("Registered Successfully.");
                    navigate("/dashboard");
                  }
                });
            })
            .catch((error) => {
              setError(error.message);
            });
        }
      });
  };

  return (
    <div className="mb-20">
      <h1 className="text-4xl m-5">Registration Your Restaurant.</h1>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="w-1/2 my-20">
          <Player
            src="https://assets5.lottiefiles.com/packages/lf20_9cyyl8i4.json"
            className="player bg-black rounded-lg"
            loop
            autoplay
            speed={1}
          />
        </div>
        <div className="w-1/2">
          <div className="card flex justify-center">
            <form onSubmit={handleRestaurantReg} className="space-y-8 mb-8">
              <div className="md:px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className="label-text">What is your name?</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Your Name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  required
                />
              </div>
              <div className="md:px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className="label-text">
                    What is your restaurant name?
                  </span>
                </label>
                <input
                  type="text"
                  name="restaurantName"
                  placeholder="Type restaurant name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  required
                />
              </div>
              <div className="md:px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className="label-text">
                    What is your restaurant address?
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Type restaurant address"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  required
                />
              </div>
              <div className="md:px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className="label-text">What is your email?</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  required
                />
              </div>
              <div className="md:px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className="label-text">What is your phone number?</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Type your phone number"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  required
                />
              </div>
              <div className="md:px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className="label-text">Picture upload</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered  w-full "
                  required
                />
              </div>

              <div className="md:px-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <span className="label-text">Enter Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type Password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  required
                />
              </div>

              <p className="font-semibold text-red-600 mt-4 text-center">
                {error}
              </p>

              <button
                className="btn btn-outline btn-warning max-w-xs block mx-auto mt-5"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantRegistration;
