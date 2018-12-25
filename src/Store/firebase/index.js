import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// CONFIG FIREBASE
const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
};

// INITIALIZE FIREBASEAPP
const firebaseInitApp = firebase.initializeApp(config);

// FIX FOR NEW VERSIONS
const firestore = firebaseInitApp.firestore();
firestore.settings({ timestampsInSnapshots: true });

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
