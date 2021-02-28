import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC6ykuGu2pPHkIbfYLZqPvMn7NuUCf4oQ",
  authDomain: "vetpet-90dfd.firebaseapp.com",
  projectId: "vetpet-90dfd",
  storageBucket: "vetpet-90dfd.appspot.com",
  messagingSenderId: "461162626165",
  appId: "1:461162626165:web:99aacc52661bb09adb0c3c",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
