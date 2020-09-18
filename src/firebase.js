import firebase from "firebase";


const firebaseConfig = {
    // Place your config from Firebase here.
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
