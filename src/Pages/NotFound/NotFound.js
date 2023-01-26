import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div data-theme="bumblebee" className="min-h-screen">
      <div className="text-center pt-10">
        <h1 className="font-semibold text-5xl">Ops...</h1>
        <h1 className="text-4xl ">Page not Found.</h1>
      </div>
      <div className="max-w-[400px] mx-auto my-20">
        <Player
          src='https://assets8.lottiefiles.com/packages/lf20_suhe7qtm.json'
          className="player"
          loop
          autoplay
          speed={1}
        />
        <Link to='/'> <p className="flex justify-center w-60 mx-auto btn border-2 border-amber-400 bg-transparent text-amber-500 rounded-2xl
                hover:bg-amber-400 hover:text-white hover:border-white">Back to home</p>
        </Link>

      </div>


    </div>
  );
};

export default NotFound;
