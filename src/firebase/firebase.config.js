// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKR1Z_rMlryFzgtFhUBCHjRRjiY5nt0zI",
  authDomain: "basic-store-a5ba5.firebaseapp.com",
  projectId: "basic-store-a5ba5",
  storageBucket: "basic-store-a5ba5.appspot.com",
  messagingSenderId: "749831683797",
  appId: "1:749831683797:web:ec9835261a09045f1aac5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const auth = getAuth(app);
export default auth;
// export default auth;