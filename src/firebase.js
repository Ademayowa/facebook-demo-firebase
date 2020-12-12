import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAMmbtN5poPoLqc0PJa_UHaRucn_EzEawM',
  authDomain: 'prodfacebook-clone.firebaseapp.com',
  databaseURL: 'https://prodfacebook-clone.firebaseio.com',
  projectId: 'prodfacebook-clone',
  storageBucket: 'prodfacebook-clone.appspot.com',
  messagingSenderId: '836011374174',
  appId: '1:836011374174:web:cf37d18d6634247b3b66cf',
  measurementId: 'G-QJ0JZN42XT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
