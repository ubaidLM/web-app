// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDkpO9Tt6W3tw6O3qgZhgy_4seY0PEbaCE",
  authDomain: "e-commrece-2268b.firebaseapp.com",
  projectId: "e-commrece-2268b",
  storageBucket: "e-commrece-2268b.appspot.com",
  messagingSenderId: "654762340511",
  appId: "1:654762340511:web:6a4fa1e1995fc5656af2aa",
  measurementId: "G-G56VFFFPQZ"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export {auth}