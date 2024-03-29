import React, { useState, useContext } from 'react';
import logo from '../../Assets/tap-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";

import useToken from '../../Hooks/useToken';


const Signup = () => {
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })
    const { createUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const auth = getAuth();

    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;
        const displayName = form.displayName.value;

        if (password !== passwordConfirm) {
            return;
        }

        const role = "buyer";
        toast.success("User created successfully")
        setState({ email: "", displayName: "", password: "", passwordConfirm: "" })

        createUser(email, password)
            .then(result => {
                const user = result.user;
                verifyEmail();
                updateProfile(auth.currentUser, { displayName: displayName })
                    .then(() => {
                        // Profile updated!
                        // ...
                        saveUser(displayName, user.email, role, user?.uid);
                    })
                    .catch((error) => {
                        // An error occurred
                        // ...
                    });
            })
            .catch(err => console.error(err))
    }

    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const { email, password, displayName, passwordConfirm } = state;


    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })

    };
    const handleEmailChange = (e) => {
        setIsLoading(true)
        const email = e.target.value;
        const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!emailValidator.test(email)) {
            setErrors({ ...errors, email: "× Please provide a valid email" })
            setState({ ...state, email: e.target.value })
            setIsLoading(false)
        }
        else {
            setErrors({ ...errors, email: "" })
            setState({ ...state, email: e.target.value })
            setIsLoading(true)
        }
    }
    ///
    const handlePasswordChange = (e) => {
        setIsLoading(true)
        const password = e.target.value;
        const passNumber = /^(?=.*[0-9])/;
        const passUpperCase = /^(?=.*[A-Z])/.test(password);
        const passLowerCase = /^(?=.*[a-z])/.test(password);
        if (!passNumber.test(password)) {
            setErrors({ ...errors, password: "× Must contain 1 number " })
            setState({ ...state, password: e.target.value })
            setIsLoading(false)
        }
        else if (!passUpperCase) {
            setErrors({ ...errors, password: "× Must contain 1 Upper Case " })
            setState({ ...state, password: e.target.value })
            setIsLoading(false)
        }
        else if (!passLowerCase) {
            setErrors({ ...errors, password: "× Must contain 1 Lower Case " })
            setState({ ...state, password: e.target.value })
            setIsLoading(false)
        }
        else if (password.length < 6) {
            setErrors({ ...errors, password: "× Must contain at least 6 characters" })
            setState({ ...state, password: e.target.value })
            setIsLoading(false)
        }
        else {
            setErrors({ ...errors, password: "" })
            setState({ ...state, password: e.target.value })
            setIsLoading(true)
        }
    }

    // ---- Send user info to database ---- //
    const saveUser = (displayName, email, role, uid) => {
        const user = { displayName, email, role: role, uid: uid };
        fetch('https://tap-for-delicious-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                setCreatedUserEmail(email);
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('please check your email and verify your email address!');

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
            <div className="flex md:w-1/2 justify-center py-10 items-center ">
                <form onSubmit={handleSignUp} className="">
                    <h1 className="font-bold text-4xl mb-1">Sign Up</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Get access to our full service</p>
                    <div className="flex items-center border-2 hover:border-yellow-400 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" name="displayName" id="" placeholder="Full name" onChange={handleChange} value={displayName} required />
                    </div>
                    <div className="flex items-center border-2 hover:border-yellow-400 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="email" name="email" id="" placeholder="Email Address" onChange={handleEmailChange} value={email} required />
                    </div>
                    {errors.email && <p className=' text-amber-500 mt-[-10px] mb-3 ml-3'>{errors.email}</p>}
                    <div className="flex items-center border-2 hover:border-yellow-400 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2  border-none outline-none"
                            type={show ? 'text' : 'password'} name="password" id="" placeholder="Password" onChange={handlePasswordChange} value={password} required />
                        <p className='cursor-pointer'>
                            {show ? <RiEyeLine onClick={() => setShow(!show)} /> : <RiEyeCloseLine onClick={() => setShow(!show)} />}
                        </p>

                    </div>
                    {errors.password && <p className='text-amber-500 mt-[-10px] mb-3 ml-2'>{errors.password}</p>}
                    <div className="flex items-center border-2 hover:border-yellow-400 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2  border-none outline-none"
                            type={showConfirm ? 'text' : 'password'} name="passwordConfirm" id="" placeholder="Repeat Password" onChange={handleChange} value={passwordConfirm} required />
                        <p className='cursor-pointer'>
                            {showConfirm ? <RiEyeLine onClick={() => setShowConfirm(!showConfirm)} /> : <RiEyeCloseLine onClick={() => setShowConfirm(!showConfirm)} />}
                        </p>
                    </div>
                    <button disabled={!isLoading} type="submit" className="block w-full  mt-4 py-2 rounded-2xl font-semibold mb-2 btn mr-10 border-2 border-amber-400 text-amber-500
                hover:bg-amber-400 hover:text-white hover:border-amber-400 bg-transparent text">Sign Up</button>
                    <div>
                        <span className="text-sm ml-2 hover:text-yellow-500 cursor-pointer">Already on Tap for Delicious?</span>
                        <span className='text-orange-400 font-semibold bg-transparent hover:text-amber-400 hover:font-bold'>
                            <Link to="/login"> Log In</Link>
                        </span>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;