import firebase from 'firebase/app';

import "firebase/analytics";

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqEZActozjj1pMCkR-2cprI9DAz2ITpvk",
    authDomain: "subscriptions-daded.firebaseapp.com",
    databaseURL: "https://subscriptions-daded.firebaseio.com",
    projectId: "subscriptions-daded",
    storageBucket: "subscriptions-daded.appspot.com",
    messagingSenderId: "567217679063",
    appId: "1:567217679063:web:2042a1413ab35d7d6c5e92",
    measurementId: "G-VMC5BLT2FT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();