import firebase from 'firebase/app';

import "firebase/analytics";

import 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    // firestore.collection(`users/${userAuth.uid}/subscriptions`).doc('Prime').set({
    //     name: 'Prime',
    //     amount: '30.00'
    // }).then(() => {
    //     console.log('SET SOMETHING GO CHECK')
    // })
    // firestore.collection(`users/${userAuth.uid}/subscriptions`).get().then(snapshot2 => {
    //     console.log('snapshot2. :', snapshot2.docs);
    //     snapshot2.docs.forEach(doc => {
    //         console.log('doc.data :', doc.data());
    //     })
    // })
    const snapShot = await userRef.get();
    if (!snapShot.exists){ 
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                subscriptions: [],
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
