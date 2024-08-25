
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, onAuthStateChanged} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCP2uwhOzNJSgKfeMg87SMZCbmIBW971dw",
  authDomain: "queuer-f6b9d.firebaseapp.com",
  projectId: "queuer-f6b9d",
  storageBucket: "queuer-f6b9d.appspot.com",
  messagingSenderId: "1026205100244",
  appId: "1:1026205100244:web:c67ceaf2809d675be6f341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dbase = getFirestore(app);


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('LOGGED IN' )
    console.log(user)
  } else {
    console.log('NO USER INFO - SIGNUP or LOGIN');
  }
});

export {auth, dbase, app as default }