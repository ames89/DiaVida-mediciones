import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// CONFIG FIREBASE
const config = {
  apiKey: 'AIzaSyCNve2Q7OP06iAS6k_Fuj5KoNYYwW7sX4E',
  authDomain: 'diavida-dev-costa-rica.firebaseapp.com',
  databaseURL: 'https://diavida-dev-costa-rica.firebaseio.com',
  projectId: 'diavida-dev-costa-rica',
  storageBucket: 'diavida-dev-costa-rica.appspot.com',
  messagingSenderId: '730070265788'
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
    console.log('enablePersistence error', err);
  });

// EXPORTS
export { firebase };
export default firebaseInitApp;
