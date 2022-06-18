import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification
} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtzQF4Hs3BbtpkbMDYTW7rTswsWgo_kfw",
    authDomain: "pitch-backend.firebaseapp.com",
    projectId: "pitch-backend",
    storageBucket: "pitch-backend.appspot.com",
    messagingSenderId: "1035990585121",
    appId: "1:1035990585121:web:5788b5e520dd21b016b860",
    measurementId: "G-BVKD7DQ775"
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
export {db}
const auth = getAuth();
export { auth }
//collection ref
const fieldRef = collection(db, 'fields');



//get collection data
export function getFields() {
    getDocs(fieldRef).then((snapshot) => {
        let fields = [];
        snapshot.docs.forEach((doc) => {
            fields.push({ ...doc.data(), id: doc.id })
        })
        console.log(fields)
        return fields
    }).catch(err => {
        console.log(err)
    });
}





//signUp user
export function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
        //console.log('user logged in:', cred.user)
    }).catch((err) => {
        console.log(err);
    })
}

//login user
export function logIn(email, password) {
    signInWithEmailAndPassword(auth, email, password).then((cred) => {
        //console.log('user logged in:', cred.user)
    }).catch((err) => {
        console.log(err);
    })

}
//logout user
export function logOut() {
    signOut(auth).then(() => {
        //console.log('the user signed out');
    }).catch((err) => {
        console.log(err)
    })
}

//listen to auth changes
onAuthStateChanged(auth, (user) => {
    console.log('user status changed: ', user)
})
