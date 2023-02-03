import React from 'react';
import { BiPointer } from "react-icons/bi";
import { Link } from 'react-router-dom';

const RegisterRes = () => {
    return (
        <div className="card border-2 bg-amber-400 hover:bg-white hover:border-yellow-400 shadow-lg mx-16 mt-14 hover:shadow-yellow-400 duration-200">
            <div className="flex justify-center p-4 ">
                <h2 className="text-center font-semibold mx-auto flex items-center text-slate-800">
                    Register your restaurant and grow your business. Click <Link to='/restaurantReg'>
                        <span className='flex ml-2 hover:text-yellow-400 cursor-pointer'>Here <BiPointer className='mt-2 animate-bounce hover:scale-105 duration-500' /></span>
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default RegisterRes;