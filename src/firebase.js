// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSIZ_nNTYNvb7NW3Cvc4MSp9Q6rN2vybc",
  authDomain: "azeem-e833e.firebaseapp.com",
  projectId: "azeem-e833e",
  storageBucket: "azeem-e833e.appspot.com",
  messagingSenderId: "19308795196",
  appId: "1:19308795196:web:5e4db20330f8499aeffa39",
  measurementId: "G-W0BYZ1DJ64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, analytics };
