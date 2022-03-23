import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyn28CDBkJbGYJp6mI2vFBEhJWvpYom30",
  authDomain: "todo-app-aebb5.firebaseapp.com",
  projectId: "todo-app-aebb5",
  storageBucket: "todo-app-aebb5.appspot.com",
  messagingSenderId: "702961250958",
  appId: "1:702961250958:web:40ba06f7020dc8ff4d0fdf",
  measurementId: "G-ZRJBB3977Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;