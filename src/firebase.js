// jshint esversion:6
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBHdWADbaNmiwwcGklYvfnvR3WZ60rEFw",
    authDomain: "snapchat-klone.firebaseapp.com",
    projectId: "snapchat-klone",
    storageBucket: "snapchat-klone.appspot.com",
    messagingSenderId: "531390108238",
    appId: "1:531390108238:web:96e58a1e433d3c67b6a91f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider }