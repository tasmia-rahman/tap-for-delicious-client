import React from 'react';
import banner from "../../Assets/about-banner/about.jpg";


const FAQ = () => {
    return (
        <div>
            <div
        className=" bg-cover bg-right"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-5xl text-white   block text-center py-40 ">
          Privacy Policy | Tap For Delicious
        </h1>
      </div>
        </div>
    );
};

export default FAQ;