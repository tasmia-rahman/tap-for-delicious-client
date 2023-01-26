import React from "react";
import banner from "../../Assets/about-banner/about.jpg";

const About = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-right"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-5xl text-white   block text-center py-40 ">
          ABOUT US
        </h1>
      </div>

      <div className="uppercase mx-16 my-20">
        <h1 className="text-3xl text-red-700">How it works</h1>
        <div className="flex my-10">
            <h2 className="text-red-700 text-xl">order</h2>
            <h2 className="mx-auto text-xl">relax</h2>
            <h2 className="mx-auto	 text-xl">enjoy</h2>
        </div>
      </div>

      <div className="bg-red-800 text-white p-14">
        <h1 className="uppercase text-3xl">our mission</h1>
        <p className=" my-8">"Bringing good food into your everyday. That's our mission.</p>
        <p className=" my-8">That means we don't just deliver--we bring it, always going the extra mile to make your experience memorable.</p>
        <p className="my-8">And it means this is delicious food you can enjoy everyday: from vibrant salads for healthy office lunches, to indulgent family-sized pizzas, to fresh sushi for a romantic night in. Whatever you crave, we can help."</p>
      </div>

      <div className="p-14 ">
        <h1 className="uppercase text-red-700 text-3xl mb-7">about tap for delicious</h1>
        <p>Tap For Delicious is Asia’s leading on-demand delivery platform, dedicated to bringing consumers a wide range of food, groceries and more, quickly and conveniently. Powered by technology and operational excellence, tap for delicious is spearheading the growth of quick-commerce (q-commerce) across the region with  its network of retail partners, as well as pandamart or foodpanda cloud stores to provide more on-demand options beyond the millions of food varieties.</p>
        <p className="mt-6">Tap For Delicious operates in more than 400 cities across 11 markets in Asia - Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, Myanmar and. Tap For Delicious is a subsidiary of Delivery Hero, a global leader of the food delivery industry. </p>
      </div>
    </div>
  );
};

export default About;
