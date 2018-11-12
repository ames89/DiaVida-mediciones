// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/datastore';

// Initalize and export Firebase.
const config = {
  apiKey: 'AIzaSyBbZvd5Cml5zvJCfERQkp8G3CKY58o6KmM',
  authDomain: 'diavida-graphql-cr-dev.firebaseapp.com',
  databaseURL: 'https://diavida-graphql-cr-dev.firebaseio.com',
  projectId: 'diavida-graphql-cr-dev',
  storageBucket: 'diavida-graphql-cr-dev.appspot.com',
  messagingSenderId: '983770696916'
};
export default firebase.initializeApp(config);
