import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const UploadItems = () => {

    const { user } = useContext(AuthContext);

    const email = 'burger@hunter.com';

    return (
        <div>
            <h1 className='text-start mx-auto py-3  font-extrabold text-transparent text-2xl md:text-5xl bg-clip-text bg-gradient-to-r from-red-700 via-orange-400 to-red-500'>Upload Food Item</h1>
            <form>

            </form>
        </div>
    );
};

export default UploadItems;