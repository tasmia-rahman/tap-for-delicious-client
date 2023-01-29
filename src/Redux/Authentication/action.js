import app from "../../firebase";
import * as types from "../Authentication/actionTypes";
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();


const signupStart = () => ({
    type: types.SIGNUP_START,
});

const signupSuccess = (user) => ({
    type: types.SIGNUP_SUCCESS,
    payload: user,
});

const signupFail = (error) => ({
    type: types.SIGNUP_FAIL,
    payload: error,
});


const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});


const logoutStart = () => ({
    type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error,
});

const googleSignIntStart = () => ({
    type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
});

const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error,
});

const facebookSignIntStart = () => ({
    type: types.FACEBOOK_SIGN_IN_START,
});

const facebookSignInSuccess = (user) => ({
    type: types.FACEBOOK_SIGN_IN_SUCCESS,
    payload: user,
});

const facebookSignInFail = (error) => ({
    type: types.FACEBOOK_SIGN_IN_FAIL,
    payload: error,
});

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user,
})


export const signupInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(signupStart());

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                const userInfo = {
                    displayName: displayName
                }
                updateProfile(auth.currentUser, userInfo)
                    .then(() => {

                    })
                    .catch(err => console.log(err));
                dispatch(signupSuccess(user))
            })
            .catch((error) => dispatch(signupFail(error.message)));
    }
}

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((error) => dispatch(loginFail(error.message)));
    }
}
const saveUser = (displayName, email, role, photoURL) => {
    const user = { displayName, email, role: role, photoURL };
    fetch('https://tap-for-delicious-server.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}
export const googleSignInInitiate = () => {
    return function (dispatch) {
        dispatch(googleSignIntStart());

        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                const displayName = user.displayName;
                const email = user.email;
                const photoURL = user.photoURL
                const role = "buyer";
                saveUser(displayName, email, role, photoURL);
                dispatch(googleSignInSuccess(user))
            })
            .catch((error) => dispatch(googleSignInFail(error.message)));
    }
}

export const facebookSignInInitiate = () => {
    return function (dispatch) {
        dispatch(facebookSignIntStart());

        signInWithPopup(auth, facebookAuthProvider.addScope("user_birthday, email"))
            .then(({ user }) => {

                dispatch(facebookSignInSuccess(user))
            })
            .catch((error) => dispatch(facebookSignInFail(error.message)));
    }
}

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());

        signOut(auth)
            .then((res) => dispatch(logoutSuccess()))

            .catch((error) => dispatch(logoutFail(error.message)));
    }
}