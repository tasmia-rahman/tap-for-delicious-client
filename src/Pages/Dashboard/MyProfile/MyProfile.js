import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const MyProfile = () => {

    const { user } = useContext(AuthContext)

    const [userData, setUserData] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }
        , [user.email])

    console.log(userData)
    return (
        <div>
            <h1>Name: {userData.displayName}</h1>
            <h1>Email: {userData.email}</h1>
            {userData.photoUrl ?
                <img src={userData.photoUrl} alt="" />
                :
                <div className="avatar flex justify-center my-16">
                    <div className="w-32 rounded-full">
                        <img src={user?.photoURL} alt="" />
                    </div>
                </div>}

        </div>
    );
};

export default MyProfile;