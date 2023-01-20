import React from 'react';
import { BiPointer } from "react-icons/bi";
import { Link } from 'react-router-dom';

const RegisterRes = () => {
    return (
        <div className="card bg-base-100 shadow-sm mx-16 mt-14">
            <div className="flex justify-center p-4 ">
                <h2 className="text-center font-semibold mx-auto flex items-center">
                    Register your restaurant and grow your business. Click <Link to='/restaurantReg'>
                        <span className='flex ml-2 hover:text-yellow-400 cursor-pointer'>Here <BiPointer className='mt-2 animate-bounce hover:scale-105 duration-500' /></span>
                    </Link>
                    {/* <Link to='/restaurantReg'>

                        <span className='hover:text-yellow-300 cursor-pointer ml-2 '>
                            <span className='flex'> Here <BiPointer /></span>
                        </span>


                    </Link> */}
                </h2>
            </div>
        </div>
    );
};

export default RegisterRes;