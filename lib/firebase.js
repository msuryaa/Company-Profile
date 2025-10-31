// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh_PWUz3t2SU7Q0azUigqr5DBpeFV67zE",
  authDomain: "company-pofile.firebaseapp.com",
  projectId: "company-pofile",
  storageBucket: "company-pofile.firebasestorage.app",
  messagingSenderId: "1071670452291",
  appId: "1:1071670452291:web:df619d159c1e8c2d8034f6",
  measurementId: "G-PX54YTECWK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
