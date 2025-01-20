// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpBTSvenkOpgL6bZDr8Uk8oB-Rpdv9inc",
    authDomain: "react-dragon-news-auth-99e4c.firebaseapp.com",
    projectId: "react-dragon-news-auth-99e4c",
    storageBucket: "react-dragon-news-auth-99e4c.firebasestorage.app",
    messagingSenderId: "102431559899",
    appId: "1:102431559899:web:84e94fea74dc242b8c7cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;