import React, { useState } from 'react';
import logo from '../../Assets/tap-logo.png'
import { BsFacebook, BsGoogle, BsListNested } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'

import { GoogleAuthProvider, FacebookAuthProvider, getAuth, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from './../../Context/AuthProvider/AuthProvider';
import app from '../../Firebase/firebase.config';
import { toast } from 'react-hot-toast';


const auth = getAuth(app)

const Login = () => {
    const { loginUser, providerLogin } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';

    const [show, setShow] = useState(false)
    const [errors, setErrors] = useState("")
    // const [state, setState] = useState({
    //     email: "",
    //     password: "",
    // });
    // const { email, password } = state;


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;





        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);



                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                navigate(from, { replace: true });

            })

            .catch(err => setErrors(err.code)
            )
    }


    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log("Google", user);
                // setLoading(false);
                // setLoginUserEmail(user.email);
                let userInfo = { displayName: user?.displayName, email: user?.email, role: 'buyer', uid: user?.uid };
                saveUser(userInfo);
            })
            .catch(error => console.log(error.message))
    }


    const handleFacebookSignIn = () => {
        providerLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                // setLoading(false);
                // setLoginUserEmail(user.email);
                let userInfo;
                if (user.email === null) {
                    userInfo = { uid: user?.uid, displayName: user?.displayName, role: 'buyer' };
                }
                else {
                    userInfo = { displayName: user?.displayName, email: user?.email, role: 'buyer' };
                }
                saveUser(userInfo);
            })
            .catch(error => console.log(error.message))
    }


    const facebookProvider = new FacebookAuthProvider();



    // ---- Send user info to database ---- //
    const saveUser = (user) => {
        fetch('https://tap-for-delicious-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/');
                console.log(data);
            })
    }
    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            toast('Please enter your email address?')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                toast('Password reset email send Please check your email')
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (

        <div className="min-h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-yellow-200 to-amber-400 justify-around items-center hidden">
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
            <div className="flex md:w-1/2 justify-center py-10 items-center">
                <form onSubmit={handleLogin} className="">
                    <h1 className=" font-bold text-4xl mb-1">Login</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Get access to our full service</p>
                    <div className="flex items-center border-2 hover:border-yellow-400 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        {/* <input className="pl-2 outline-none border-none" type="email" name="email" id="" placeholder="Email Address" value={email} required /> */}
                        <input onBlur={handleEmailBlur} className="pl-2 outline-none border-none" type="email" name="email" id="" placeholder="Email Address" required />
                    </div>
                    <div className="flex items-center border-2 hover:border-yellow-400 focus:border-yellow-400 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        {/* <input className="pl-2  border-none outline-none"
                            type={show ? 'text' : 'password'} name="password" id="" placeholder="Password" value={password} required
                        /> */}
                        <input className="pl-2  border-none outline-none"
                            type={show ? 'text' : 'password'} name="password" id="" placeholder="Password" required
                        />
                        <p className='cursor-pointer'>
                            {show ? <RiEyeLine onClick={() => setShow(!show)} /> : <RiEyeCloseLine onClick={() => setShow(!show)} />}
                        </p>
                    </div>
                    {errors && <p className='text-amber-500 mt-2 text-center mb-[-7px] '>{errors}</p>}
                    <button type="submit" className="block w-full  mt-4 py-2 rounded-2xl font-semibold mb-2 btn mr-10 border-2 border-amber-400 hover:border-amber-400 text-amber-500
                hover:bg-amber-400 hover:text-white bg-transparent text">Login</button>
                    {/* <span className="text-sm ml-2 hover:text-yellow-500 cursor-pointer">Forgot Password ? <button className=''>Reset password</button>
                    </span> */}
                    <div className='mt-4'>
                        Don't have an account? <Link to='/signup'><span className='text-orange-400 font-semibold hover:text-amber-400  hover:font-bold'>Sign up</span></Link>
                    </div>
                    <div className="divider">OR</div>

                    <button type='button' onClick={handleGoogleSignIn} className='w-full  mt-4 py-2 rounded-2xl font-semibold mb-2 btn mr-10 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 text bg-transparent'>
                        CONTINUE WITH GOOGLE <FcGoogle className='ml-2 text-lg' />
                    </button>
                    <button type='button' onClick={handleFacebookSignIn} className='flex block w-full  mt-4 py-2 rounded-2xl font-semibold mb-2 btn mr-10 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text bg-transparent hover:border-blue-500 text'>

                        CONTINUE WITH FACEBOOK <BsFacebook className='ml-2' />
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Login;