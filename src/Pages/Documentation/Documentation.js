import React from 'react';
import banner from '../../Assets/about-banner/about.jpg'

const Documentation = () => {
    return (
        <div>
        <div
          className=" bg-cover bg-right"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <h1 className="text-5xl text-white   block text-center py-40 ">
            Documentation | Tap For Delicious
          </h1>
        </div>
  
        {/* <div className="uppercase mx-16 my-20">
          <h1 className="text-3xl text-red-700">How it works</h1>
          <div className="flex my-10">
              <h2 className="text-red-700 text-xl">order</h2>
              <h2 className="mx-auto text-xl">relax</h2>
              <h2 className="mx-auto	 text-xl">enjoy</h2>
          </div>
        </div> */}
  
        <div className=" p-14">
          <h1 className="uppercase text-3xl">Tap for Delicious.</h1>
          <p className=" my-8"></p>
          <p className=" my-8">Technologies: <br /> React for JavaScript library, Node.js & Express.js for backend, MongoDB for server, Firebase for authentication, JWT for authorization, Tailwind CSS for css library, DaisyUI for css component library, Github, various npm packages etc.</p>
          
          <p className=" my-8">User Authentication: <br /> User can create an account and login with email and password, Also can login using google account or facebook account. This will be done by firebase authentication.</p>

          <p className=" my-8">Authorization: <br /> Users will be authorized by using JWT. If they have a valid token then they can do whatever they are authorized to do.
</p>

          <p className=" my-8">User Dashboard: <br /> Users can see their orders, their favorite restaurants , their wishlist, pay their order, or delete order.
</p>

          <p className=" my-8">Admin Dashboard: <br /> This is a protected route for admin only. Admins can delete any registered user or restaurant if reported. And can see all restaurant details. Can see emails and suggestions from users.</p>

          <p className=" my-8">Seller Dashboard: <br /> This is a protected route for sellers or restaurants only. They can upload their food products for selling.
</p>

          <p className=" my-8">Add to Cart: <br /> Users can freely add products to their cart before buying, can edit and update their cart.  Users can put selected food items in the cart before confirming the order.</p>

          <p className=" my-8">Review: <br />  Users can rate restaurant services and post their valuable review which is open to others.
</p>
          <p className=" my-8">Blogs: <br />  Sellers can post blogs through their dashboard.
</p>
          <p className=" my-8">Navbar: <br />  There are five general routes on the navbar, Home, About, Contact, Blog, Cart and one login only protected route Dashboard and a login button on the navbar.
</p>
          <p className=" my-8">Dark mode: <br />   There is a theme toggle button on the navbar that changes the theme of the site from light to dark.
</p>
          <p className=" my-8">Banner: <br />  There is a banner/ photo carousel on top of the homepage to make the website look attractive.
</p>
          <p className=" my-8">Register restaurant: <br />  For creating a business account people can register their restaurant.
</p>
          <p className=" my-8">Top food: <br />  Top rated foods are shown on the homepage. Clicking on that, takes to the details page from where users can order.</p>
          <p className=" my-8">Top restaurants: <br />  Top rated restaurants are shown on the homepage clicking on them takes to the restaurant details page where all food items of the restaurants can be seen and there is a see all button, clicking on that takes to the see all restaurants page.
</p>
          <p className=" my-8">About: <br />  In the about page we can see some description about the website.
</p>
          <p className=" my-8">Contact: <br />  People can reach us or the website owner by sending email through this page.
</p>
          <p className=" my-8">Use of Redux: <br /> Redux is used to manage state of user login/ authentication. And ordering cart.</p>
          <p className=" my-8">Hosting: Client site hosted on Firebase server site hosted on vercel.
</p>
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

export default Documentation;