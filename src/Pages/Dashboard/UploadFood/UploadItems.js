import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { MdOutlineFastfood } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';

const UploadItems = () => {

    const { user } = useContext(AuthContext);

    const email = user.email;

    return (
        <div>
            <h1 className='text-start mx-auto py-3  font-extrabold text-transparent text-2xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-700 via-orange-400 to-red-500'>Upload Food Item</h1>
            <form>
                <div className="flex items-center border-2 hover:border-yellow-400 my-10 py-2 px-3 rounded-2xl mb-4 max-w-3xl">
                    <MdOutlineFastfood />
                    <input className="pl-2 outline-none border-none" type="text" name="food" id="" placeholder="Name of the food" required />
                </div>
                <div className="flex items-center border-2 hover:border-yellow-400 my-10 py-2 px-3 rounded-2xl mb-4 max-w-3xl">
                    <TbCurrencyTaka />
                    <input className="pl-2 outline-none border-none" type="text" name="price" id="" placeholder="Set price ৳" required />
                </div>
            </form>
        </div>
    );
};

export default UploadItems;