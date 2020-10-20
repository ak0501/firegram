 import * as firebase from 'firebase/app'
 import 'firebase/storage';
 import 'firebase/firestore';
 
  var firebaseConfig = {
    apiKey: "AIzaSyB7_1_8qNto5ZGPVzVwEO6cjWfnK7zUJxI",
    authDomain: "crud-061.firebaseapp.com",
    databaseURL: "https://crud-061.firebaseio.com",
    projectId: "crud-061",
    storageBucket: "crud-061.appspot.com",
    messagingSenderId: "644876163597",
    appId: "1:644876163597:web:992b85665754ca65265344",
    measurementId: "G-DKT184LR0X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage,projectFirestore};

