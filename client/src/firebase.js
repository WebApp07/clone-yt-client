// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaYsahd13N_QRzhM2PscLgBnGnbMkbnAA",
  authDomain: "video-app-c4db8.firebaseapp.com",
  projectId: "video-app-c4db8",
  storageBucket: "video-app-c4db8.appspot.com",
  messagingSenderId: "962523612127",
  appId: "1:962523612127:web:937c2227af5af519c27a6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
