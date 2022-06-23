// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../../.envi';

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';



// Initialize Firebase
if(!firebase.apps.length)
{firebase.initializeApp(firebaseConfig);}


export default firebase;
