import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC3nUVQrjALX0Rfp4pYKl_l3m6iNGGtSX0",
  authDomain: "booksantaapp-8305a.firebaseapp.com",
  databaseURL: "https://booksantaapp-8305a.firebaseio.com",
  projectId: "booksantaapp-8305a",
  storageBucket: "booksantaapp-8305a.appspot.com",
  messagingSenderId: "222305410521",
  appId: "1:222305410521:web:416f704c864a101e96cdc8"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
