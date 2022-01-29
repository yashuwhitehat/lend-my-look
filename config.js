
  import firebase from 'firebase'

 const firebaseConfig = {
  apiKey: "AIzaSyAqTf00R8vHXWBSvqWkSwmcWZDjZBx_5rw",
  authDomain: "lend-my-look.firebaseapp.com",
  databaseURL: "https://lend-my-look-default-rtdb.firebaseio.com",
  projectId: "lend-my-look",
  storageBucket: "lend-my-look.appspot.com",
  messagingSenderId: "235325942693",
  appId: "1:235325942693:web:8dbfadb7661348be2cd64c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();