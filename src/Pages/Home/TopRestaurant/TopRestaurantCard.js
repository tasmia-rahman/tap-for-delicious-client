import React from 'react';

const TopRestaurantCard = ({ restaurant }) => {
  const { img, title } = restaurant;
  return (

    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurantCard;