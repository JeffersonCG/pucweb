import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDi5so6VCoaiIi6RKcqNMoCNCaWmKUDek",
    authDomain: "pucweb-f8b61.firebaseapp.com",
    projectId: "pucweb-f8b61",
    storageBucket: "pucweb-f8b61.appspot.com",
    messagingSenderId: "178887751781",
    appId: "1:178887751781:web:8092c0226a41901193ee8c"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;