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

      <div className="p-14 bg-orange-50">
        <h1 className="uppercase text-red-700 text-3xl mb-7">How it works | tap for delicious</h1>
        <p>Tap for Delicious is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.</p>
        <p className="mt-6">Find a restaurant, <br />
 You can find a lots of restaurant on the home page. Browse from our extensive list of restaurants that deliver to your area. Pick a restaurant you like and browse its menu.</p>
<br />
<p>Order what you want,<br />
Build up your meal by choosing from any of your favorite restaurants, browse the menu and select the items you will like to order. If options are required, e.g pizza toppings, you will be asked to choose them one you click on an item. Your items will appear on your cart on the right.</p>
<br />
<p>
Checkout & Payment, <br />
Once you are happy with your order, click on the "ORDER NOW" button and enter your delivery address. Simply follow the checkout instructions from there. We currently only accept cash on delivery and card payment.</p>
<br />
<p>
Delivery, <br />
We will send you an SMS confirming your order and delivery time. Sit back, relax and wait for piping hot food to be conveniently delivered to you! </p>
      </div>
    </div>
  );
};

export default About;
