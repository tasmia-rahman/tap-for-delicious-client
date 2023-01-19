// // import  firebase  from "firebase/app";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// // import "firebase/auth"


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCqD8gr96V3F1ziDpaY44_Il1rodGChuBo",
//   authDomain: "food-for-delicious.firebaseapp.com",
//   projectId: "food-for-delicious",
//   storageBucket: "food-for-delicious.appspot.com",
//   messagingSenderId: "250067381375",
//   appId: "1:250067381375:web:8ea0ba0d007773fad8a34a"
// };

// // Initialize Firebase
//  //const app = firebase.initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

// //const app = initializeApp(firebaseConfig);

//   const app = firebase.auth();
//   //const googleAuthProvider = new GoogleAuthProvider();
//   //const facebookAuthProvider = new auth.facebookAuthProvider();



//   //export  {app, googleAuthProvider};

// export default app;




import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqD8gr96V3F1ziDpaY44_Il1rodGChuBo",
  authDomain: "food-for-delicious.firebaseapp.com",
  projectId: "food-for-delicious",
  storageBucket: "food-for-delicious.appspot.com",
  messagingSenderId: "250067381375",
  appId: "1:250067381375:web:8ea0ba0d007773fad8a34a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
