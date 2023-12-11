import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCRTkz5VtaC5sVGB8OJiXxFPt7u4xACD60",
    authDomain: "isegye-photobooth.firebaseapp.com",
    databaseURL: "https://isegye-photobooth-default-rtdb.firebaseio.com",
    projectId: "isegye-photobooth",
    storageBucket: "isegye-photobooth.appspot.com",
    messagingSenderId: "27193336596",
    appId: "1:27193336596:web:66cd874865c83348e2d801",
    measurementId: "G-0HRGKM6N0P"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };