import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBwujWIv9qZmkMkUC2OcxeEDM0N0M4huB0",
    authDomain: "mayk-dec14.firebaseapp.com",
    projectId: "mayk-dec14",
    storageBucket: "mayk-dec14.appspot.com",
    messagingSenderId: "625263705885",
    appId: "1:625263705885:web:f5ddb3541bf82678c02bf4",
    measurementId: "G-B0QX2X8JE7"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()


  export  {
    storage, firebase as default
  }