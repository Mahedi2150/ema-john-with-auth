// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2LqdZGsryWmqqEuNPtKogJonk2trnimY",
    authDomain: "ema-jhon-simple-2-7af4f.firebaseapp.com",
    projectId: "ema-jhon-simple-2-7af4f",
    storageBucket: "ema-jhon-simple-2-7af4f.appspot.com",
    messagingSenderId: "204499300085",
    appId: "1:204499300085:web:89ac5af5a9fcb965bc9fbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;