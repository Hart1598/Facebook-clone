import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDlxf3Qh54xJys8HmUwjCP6662Hc3_9f1U",
    authDomain: "fb-clone-11976.firebaseapp.com",
    databaseURL: "https://fb-clone-11976.firebaseio.com",
    projectId: "fb-clone-11976",
    storageBucket: "fb-clone-11976.appspot.com",
    messagingSenderId: "1094674871424",
    appId: "1:1094674871424:web:7d7621bd67fa8ff2b8a265",
    measurementId: "G-4HKQNRNRHZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;