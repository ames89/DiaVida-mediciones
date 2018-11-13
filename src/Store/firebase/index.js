import firebaseLib from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCNve2Q7OP06iAS6k_Fuj5KoNYYwW7sX4E',
  authDomain: 'diavida-dev-costa-rica.firebaseapp.com',
  databaseURL: 'https://diavida-dev-costa-rica.firebaseio.com',
  projectId: 'diavida-dev-costa-rica',
  storageBucket: 'diavida-dev-costa-rica.appspot.com',
  messagingSenderId: '730070265788'
};

export const firebase = firebaseLib;
export default firebase.initializeApp(config);
