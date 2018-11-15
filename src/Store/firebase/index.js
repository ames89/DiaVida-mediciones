import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// CONFIG FIREBASE
const config = {
  apiKey: 'AIzaSyCWnkNyxOjnLxEL2AWV6zx6IUtQzJvwT04',
  authDomain: 'diavida-costa-rica-2018.firebaseapp.com',
  databaseURL: 'https://diavida-costa-rica-2018.firebaseio.com',
  projectId: 'diavida-costa-rica-2018',
  storageBucket: 'diavida-costa-rica-2018.appspot.com',
  messagingSenderId: '559741428424'
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
