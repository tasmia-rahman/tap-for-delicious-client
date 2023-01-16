import React from "react";
import Lottie from "react-lottie";
import data from "./ssssttt-shut-up-the-cat-is-sleeping.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="font-semibold text-5xl">Ops...</h1>
        <h1 className="text-4xl ">Page not Found.</h1>
      </div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default NotFound;
