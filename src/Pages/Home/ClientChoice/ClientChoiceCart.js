import React from 'react';

const ClientChoiceCart = ({item}) => {
  const {title, img} = item
  return (
    <div style={{width: 450}} className="card bg-base-100 shadow-xl ">
  <div className="flex p-5">
    <img style={{ width: 50, height: 60 }} className='p-1  ' src={img} alt="double-check" />
    <h2 className="card-title m-2 text-2xl">{title}</h2>
   
  </div>
</div>
  );
};

export default ClientChoiceCart;