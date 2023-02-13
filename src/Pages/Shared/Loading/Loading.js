import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen bg-base-100 mx-auto my-auto">
            <div className="max-w-[400px] mx-auto my-auto">
                <Player
                    src='https://assets3.lottiefiles.com/packages/lf20_p8bfn5to.json'
                    className="player"
                    loop
                    autoplay
                    speed={1}
                />


            </div>


        </div>
    );
};

export default Loading;