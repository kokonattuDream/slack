import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDF5R-qLZQUUbGoS3N2PylGcDbUhhiW6BI",
    authDomain: "slack-db.firebaseapp.com",
    databaseURL: "https://slack-db.firebaseio.com",
    projectId: "slack-db",
    storageBucket: "slack-db.appspot.com",
    messagingSenderId: "1017449648675"
  };
  firebase.initializeApp(config);

  export default firebase;