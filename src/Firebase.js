import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhOD4HbED1PisoOhy2LJNowgHYhZpRITw",
    authDomain: "e-book-store-db.firebaseapp.com",
    projectId: "e-book-store-db",
    storageBucket: "e-book-store-db.appspot.com",
    messagingSenderId: "225931014364",
    appId: "1:225931014364:web:d39990c91aaf1cbe188419",
    measurementId: "G-3SL6BFCQ2E"
  };

  const firebaseApp = firebase.initialApp{firebaseConfig};

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };