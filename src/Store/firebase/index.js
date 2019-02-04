import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// CONFIG FIREBASE
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
};

// INITIALIZE FIREBASEAPP
const firebaseInitApp = firebase.initializeApp(config);

// FIX FOR NEW VERSIONS
const firestore = firebaseInitApp.firestore();
firestore.settings({});

// ENABLE PERSISTENCE
firebaseInitApp
  .firestore()
  .enablePersistence()
  .catch(err => {
    console.error('enablePersistence error', err);
  });

// EXPORTS
export { firebase };
export default firebaseInitApp;
