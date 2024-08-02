// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics"; // Unsupported
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz5865GrLZmoe-teRnEgvyrnZHvLJbXCM",
  authDomain: "studybuddyapp-c8202.firebaseapp.com",
  projectId: "studybuddyapp-c8202",
  storageBucket: "studybuddyapp-c8202.appspot.com",
  messagingSenderId: "423173084937",
  appId: "1:423173084937:web:cbf366b744f6847d58e5d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

//const analytics = getAnalytics(app); // Unsupported - Use analytics.isSupported()

export { firestore, auth };