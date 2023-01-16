import React from "react";
import { TiTickOutline } from "react-icons/ti";
import mobile from "../../../Assets/client-banner/client-banner2.jpg";

const ClientChoice = () => {
  return (
    <div className="my-20 mx-10">
      <div className="text-center">
        <h6 className="font-bold pb-5">Client's Most Popular Choice</h6>
        <h3 className="font-semibold text-4xl pb-4">
          Why <span className="text-red-600">People</span> Choose Us
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-10 mx-auto px-5 mt-10">
        {/* first part */}
        <div>
          <div className="card bg-base-100 shadow-xl mx-auto  ">
            <div className="flex p-4 ">
              <TiTickOutline className="text-6xl my-auto text-yellow-400 border-4 rounded-full"></TiTickOutline>
              <h2 className="card-title ml-2 ">
                10,000 Restaurants Menus
              </h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl mx-auto  mt-10">
            <div className="flex p-4 ">
              <TiTickOutline className="text-6xl my-auto text-yellow-400 border-4 rounded-full"></TiTickOutline>
              <h2 className="card-title ml-2 ">
                Free Mobile Application
              </h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl mx-auto  mt-10">
            <div className="flex p-4 ">
              <TiTickOutline className="text-6xl my-auto text-yellow-400 border-4 rounded-full"></TiTickOutline>
              <h2 className="card-title ml-2 ">
                Fast Guaranteed Delivery
              </h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl mx-auto  mt-10">
            <div className="flex p-4 ">
              <TiTickOutline className="text-6xl my-auto text-yellow-400 border-4 rounded-full"></TiTickOutline>
              <h2 className="card-title ml-2 ">
                Free Home Delivery
              </h2>
            </div>
          </div>
        </div>
        {/* People Choose Banner */}
        <div className="hidden  lg:block my-auto">
          <img
            style={{ height: 490 }}
            className="mx-auto  rounded-lg"
            src={mobile}
            alt="mobile"
          />
        </div>
        {/* second part */}
        <div>
          <div className="card bg-base-100 shadow-xl mx-auto ">
            <div className="flex p-4 ">
              <TiTickOutline className="text-6xl my-auto text-yellow-400 border-4 rounded-full"></TiTickOutline>
              <h2 className="card-title ml-2 ">
                24/7 Home Delivery
              </h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl mx-auto  mt-10">
            <div className="flex p-4 ">
              <TiTickOutline className="text-6xl my-auto text-yellow-400 border-4 rounded-full"></TiTickOutline>
              <h2 className="card-title ml-2 ">
                Offer For Some Package 
              </h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl mx-auto  mt-10">
            <div className="flex p-4 ">
              <TiTickOutline className="text-6xl my-auto text-yellow-400 border-4 rounded-full"></TiTickOutline>
              <h2 className="card-title ml-2 ">
                Offer For Top Ordering
              </h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl mx-auto  mt-10">
            <div className="flex p-4 ">
              <TiTickOutline className="text-6xl my-auto text-yellow-400 border-4 rounded-full"></TiTickOutline>
              <h2 className="card-title ml-2 ">
               Offer For Different Festival
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientChoice;
