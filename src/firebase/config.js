 import * as firebase from 'firebase/app'
 import 'firebase/storage';
 import 'firebase/firestore';
 
  var firebaseConfig = {
   
      apiKey: "AIzaSyA5V1Y9zI05rD7OA0uj7CDb6lRlr4AacsY",
      authDomain: "firegram-ac514.firebaseapp.com",
      databaseURL: "https://firegram-ac514.firebaseio.com",
      projectId: "firegram-ac514",
      storageBucket: "firegram-ac514.appspot.com",
      messagingSenderId: "924673104872",
      appId: "1:924673104872:web:8a0863298bba48f8e3e25d",
      measurementId: "G-TRBLWJ611C"
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage,projectFirestore};

