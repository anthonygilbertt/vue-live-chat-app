// import firebase from "firebase/app";
import "firebase/app";
import { initializeApp } from "firebase/app";
// import 'firebase/auth'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDBLcijlZjy2vqkhLqHl4VIRF6Zl4KLWR4",
    authDomain: "udemy-vue-firebase-sites-82416.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-82416",
    storageBucket: "udemy-vue-firebase-sites-82416.appspot.com",
    messagingSenderId: "154349182537",
    appId: "1:154349182537:web:d9d8b82bcf70819eb0a998"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()


const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }