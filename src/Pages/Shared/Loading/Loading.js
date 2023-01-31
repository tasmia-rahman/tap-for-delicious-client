import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Loading = () => {
    return (
        <div data-theme="bumblebee" className="min-h-screen">
            <div className="text-center pt-10">
                <h1 className="font-semibold text-lg">Loading...</h1>
            </div>
            <div className="max-w-[400px] mx-auto my-20">
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