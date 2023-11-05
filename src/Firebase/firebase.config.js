// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx6-8xu2N6G1yqQa__ZK1FIM8Y06l1QXU",
    authDomain: "ome-library.firebaseapp.com",
    projectId: "ome-library",
    storageBucket: "ome-library.appspot.com",
    messagingSenderId: "885637836160",
    appId: "1:885637836160:web:1e3a9f1e9247d5ff0ae565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app