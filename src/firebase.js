import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAF1O-NxywgiP5IVI714pwHMOd3EaBJ-oQ",
    authDomain: "disneyplus-clone-9c5e6.firebaseapp.com",
    projectId: "disneyplus-clone-9c5e6",
    storageBucket: "disneyplus-clone-9c5e6.appspot.com",
    messagingSenderId: "708716868414",
    appId: "1:708716868414:web:1a9a8e92ecf62ca4e9326f",
    measurementId: "G-EEQS31YFKR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};

export default db;