import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCfyPxSqKClZYQ4hqwsPeqQhN3TIR9a6QY",
    authDomain: "clone-44047.firebaseapp.com",
    databaseURL: "https://clone-44047.firebaseio.com",
    projectId: "clone-44047",
    storageBucket: "clone-44047.appspot.com",
    messagingSenderId: "822828359398",
    appId: "1:822828359398:web:fda262c91d4c8fd8c96527",
    measurementId: "G-6DDE8P2LYX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
