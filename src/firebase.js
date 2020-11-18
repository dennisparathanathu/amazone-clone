import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAaxTguGIS5-dC4h8PMayw90OPJY-P-vbY",
    authDomain: "e-clone-776ef.firebaseapp.com",
    databaseURL: "https://e-clone-776ef.firebaseio.com",
    projectId: "e-clone-776ef",
    storageBucket: "e-clone-776ef.appspot.com",
    messagingSenderId: "778190590847",
    appId: "1:778190590847:web:319dd25ac2c343e963404a",
    measurementId: "G-WNJ380DKCK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};