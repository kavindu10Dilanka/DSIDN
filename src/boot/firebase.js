import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBr19z4dJv6FOj7TPxwwblef_ArB6rU_JQ",
  authDomain: "dsi-dn-pr.firebaseapp.com",
  projectId: "dsi-dn-pr",
  storageBucket: "dsi-dn-pr.appspot.com",
  messagingSenderId: "175786112474",
  appId: "1:175786112474:web:2d7027665469f5e4ab3ce3"
  };
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  export default db

  firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    })
  };


  




  
  