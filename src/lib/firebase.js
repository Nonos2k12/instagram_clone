import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAhBDLD4c1g4HvfBmLAMHeApwTD_EozKkI",
    authDomain: "instagram-e38c0.firebaseapp.com",
    projectId: "instagram-e38c0",
    storageBucket: "instagram-e38c0.appspot.com",
    messagingSenderId: "1003530899896",
    appId: "1:1003530899896:web:8dad6818734d1099d8ff4d"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE !) 
//seedDatabase(firebase);

export { firebase, FieldValue };