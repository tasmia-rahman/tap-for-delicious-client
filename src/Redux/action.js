import app from "../firebase";
//import app from "../firebase";
import * as types from "./actionTypes";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();





const signupStart = () => ({
    type: types.SIGNUP_START,
});

const signupSuccess = (user) =>({
    type: types.SIGNUP_SUCCESS,
    payload: user,
});

const signupFail = (error) =>({
    type: types.SIGNUP_FAIL,
    payload: error,
});


const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user) =>({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

const loginFail = (error) =>({
    type: types.LOGIN_FAIL,
    payload: error,
});


const logoutStart = () => ({
    type: types.LOGOUT_START,
});

const logoutSuccess = () =>({
    type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) =>({
    type: types.LOGOUT_FAIL,
    payload: error,
});

const googleSignIntStart = () => ({
    type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = () =>({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
});

const googleSignInFail = (error) =>({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error,
});

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user,
})


export const signupInitiate = (email, password, displayName) => {
    return function (dispatch){
        dispatch(signupStart());
        
          createUserWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
             user.updateProfile({
                displayName,
             });
             dispatch(signupSuccess(user))
          })
          .catch((error) => dispatch(signupFail(error.message)));
    }
}

export const loginInitiate = (email, password) => {
    return function (dispatch){
        dispatch(loginStart());
        
          signInWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
             dispatch(loginSuccess(user))
          })
          .catch((error) => dispatch(loginFail(error.message)));
    }
}

export const googleSignInInitiate = () => {
    return function (dispatch){
        dispatch(googleSignIntStart());
        
          signInWithPopup(auth, googleAuthProvider)
          .then(res => {
            const user = res.user;
            console.log(user);
            //  dispatch(googleSignInSuccess(user))
          })
          .catch((error) => dispatch(googleSignInFail(error.message)));
    }
}

export const logoutInitiate = () => {
    return function (dispatch){
        dispatch(logoutStart());
        
          signOut(auth)
          .then((res) =>dispatch(logoutSuccess()))
        
          .catch((error) => dispatch(logoutFail(error.message)));
    }
}