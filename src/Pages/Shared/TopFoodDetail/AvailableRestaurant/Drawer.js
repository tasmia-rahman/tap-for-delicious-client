import React from 'react';

const Drawer = () => {
    return (
        <div className='lg:flex h-full w-full'>
                    <div className="py-8 pl-6">
                        <div className="">
                            <h3 className='text-2xl font-semibold mb-2'>Filters</h3>
                            <div className='flex gap-1'>
                                <hr style={{ backgroundColor: "gold", height: "3px", width: "50px" }} />
                                <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                                <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                                <hr style={{ backgroundColor: "gold", height: "3px", width: "4px" }} />
                            </div>
                            <div className='flex gap-11 justify-between my-6'>
                                <h3 className=' text-slate-600'>Near By Me</h3>
                                
                                {/* The button to open modal */}
                                <label htmlFor="my-modal-3" type="checkbox" className="toggle toggle-warning">
                                    
                                </label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                <div className="modal ">
                                    <div className="modal-box relative w-72">
                                        <h3 className="text-lg font-bold">Confirmation</h3>
                                        <p className="py-4">Permission for Current Location</p>
                                        <hr/>
                                       <div className='flex justify-between mt-5'>
                                       <label htmlFor="my-modal-3" className="btn btn-sm btn-circle w-50  text-white ">Yes</label>
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle w-50  text-white">No</label>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between my-3'>
                                <p className=' text-slate-600'>Delivery</p>
                                <input type="checkbox" className="toggle toggle-warning" />
                            </div>
                            <div className='flex justify-between'>
                                <p className=' text-slate-600'>Pickup</p>
                                <input type="checkbox" className="toggle toggle-warning" />
                            </div>
                        </div>
                        <div className='my-6' >
                            <h2 className='text-xl font-medium mb-2'>Advertisement</h2>
                            <img src='https://marketplace.foodotawp.com/wp-content/uploads/2021/04/BuffetFood.jpg' alt='' />
                        </div>
                    </div>
                    <div className="divider divider-horizontal hidden lg:flex"></div>
                </div>
    );
};

export default Drawer;