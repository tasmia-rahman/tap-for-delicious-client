import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../Assets/tap-logo.png'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { googleSignInInitiate, loginInitiate } from '../../Redux/action';

const Login = () => {

   
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const {email, password} = state;

    const { currentUser } = useSelector(state => state.user);

    const navigate = useNavigate();

    useEffect(() =>{
        if(currentUser){
            navigate('/');
        }
    }, [currentUser, navigate])

    const dispatch = useDispatch();


    const handleGoogleSignIn = () =>{
        dispatch(googleSignInInitiate());
    }
    const handleFacebookSignIn = () =>{}
    

    const handleLogin = (event) => {
        event.preventDefault();
        if(!email || !password){
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({email: "", password: ""});
    }
    const handleChange = (e) =>{
        let {name, value} = e.target;
        setState({...state, [name]: value})
    };


    return (

        <div className="min-h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-yellow-200 to-amber-400 i justify-around items-center hidden">
                <div>
                    <img src={logo} alt="" className='z-20 animate-pulse' />
                    {/* <h1 className="text-white font-bold text-4xl font-sans">Tap For Delicious</h1>
                    <p className="text-white mt-1">You are just one tap away</p> */}
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-10"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-10"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-10"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-10"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form onSubmit={handleLogin} className="bg-white">
                    <h1 className="text-gray-800 font-bold text-4xl mb-1">Login</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Get access to our full service</p>
                    {/* <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
                    </div> */}
                    <div className="flex items-center border-2 hover:border-yellow-400 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="email" name="email" id="" placeholder="Email Address" onChange={handleChange} value={email} required />
                    </div>
                    <div className="flex items-center border-2 hover:border-yellow-400 focus:border-yellow-400 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2  border-none outline-none"
                            type="password" name="password" id="" placeholder="Password" onChange={handleChange} value={password} required/>
                    </div>
                    <button type="submit" className="block w-full  mt-4 py-2 rounded-2xl font-semibold mb-2 btn mr-10 border-2 border-amber-400 bg-transparent text-amber-500
                hover:bg-amber-400 hover:text-white hover:border-white text">Login</button>
                    <span className="text-sm ml-2 hover:text-yellow-500 cursor-pointer">Forgot Password ?</span>
                    <div className="divider">OR</div>
                    <div>
                        <span className="text-sm ml-2 hover:text-yellow-500 cursor-pointer">Don't have an account ?</span>
                        <Link to="/signup"> Sign up</Link>

                    </div>
                    <button type='button' onClick={handleGoogleSignIn} className='w-full  mt-4 py-2 rounded-2xl font-semibold mb-2 btn mr-10 border-2 border-amber-400 bg-transparent text-amber-500
                hover:bg-amber-400 hover:text-white hover:border-white text'>
                        CONTINUE WITH GOOGLE <BsGoogle className='ml-2' />
                    </button>
                    <button type='button' onClick={handleFacebookSignIn} className='w-full  mt-4 py-2 rounded-2xl font-semibold mb-2 btn mr-10 border-2 border-amber-400 bg-transparent text-amber-500
                hover:bg-amber-400 hover:text-white hover:border-white text'>
                        CONTINUE WITH Facebook <BsFacebook className='ml-2' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;