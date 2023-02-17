import React, { useContext, useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)

            .then(res => res.json())
            .then(data => setUserData(data))
    }
        , [user.email])

    return (
        <div>
            <h2 className="text-2xl text-center">Welcome</h2>
            <h1 className="mt-5 text-center mx-auto py-3 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-600">{user?.displayName}</h1>
            {userData?.photoUrl ?
                <div className="avatar flex justify-center my-16">
                    <div className="w-32 rounded-full">
                        <img src={userData?.photoUrl} alt="" />
                    </div>
                </div> :
                <div className='flex justify-center'>
                    <h1 className='text-8xl my-16'><FaRegUser></FaRegUser></h1>
                </div>
            }

            <div className='my-10'>
                <Player
                    src='https://assets2.lottiefiles.com/packages/lf20_jrpzvtqz.json'
                    className="player rounded-lg"
                    loop
                    autoplay
                    speed={1}
                />
            </div>

        </div>
    );
};

export default Dashboard;