import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const UploadItems = () => {

    const { user } = useContext(AuthContext);

    const email = 'burger@hunter.com';

    return (
        <div>

        </div>
    );
};

export default UploadItems;