// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYGyTkoDl2Esevz_HTE8a9mV2B2vMtSuQ",
  authDomain: "assignment-11-4c723.firebaseapp.com",
  projectId: "assignment-11-4c723",
  storageBucket: "assignment-11-4c723.appspot.com",
  messagingSenderId: "112969776412",
  appId: "1:112969776412:web:43b839cae452c70f724ed9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth