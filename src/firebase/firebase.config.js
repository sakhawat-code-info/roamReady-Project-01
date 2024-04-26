// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


console.log('checking', import.meta.env.VITE_SOME_KEY)



const firebaseConfig = {
    apiKey: "AIzaSyD8cdeLmxCSUMrbcKp_uqs4XwpraOumKbI",
    authDomain: "b9a10-client-side.firebaseapp.com",
    projectId: "b9a10-client-side",
    storageBucket: "b9a10-client-side.appspot.com",
    messagingSenderId: "586164498873",
    appId: "1:586164498873:web:5a68040e06649f22bb0668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;