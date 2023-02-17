import React from 'react';
import banner from "../../Assets/about-banner/about.jpg";


const FAQ = () => {
    return (
        <div>
            <div
        className=" bg-cover bg-right"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-5xl text-white   block text-center py-40 bg-stone-800/30">
          FAQ | Tap For Delicious
        </h1>
      </div>
      <div className="p-14 pb-24">
        <h1 className="text-4xl">Do you have any questions? Is there anything we can help you with?</h1>
        <p className="mt-10">
        We collected the most common questions to help you.
        </p>
      </div>
        </div>
    );
};

export default FAQ;