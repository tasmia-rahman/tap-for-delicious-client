import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="text-center mt-10">
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
      </div>

    </div>
  );
};

export default NotFound;
