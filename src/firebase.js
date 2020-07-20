import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1_RKBCBzvXOGlF-Yzey1bJ9E6zdACBOM",
  authDomain: "instagram-clone-react-9e6c8.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-9e6c8.firebaseio.com",
  projectId: "instagram-clone-react-9e6c8",
  storageBucket: "instagram-clone-react-9e6c8.appspot.com",
  messagingSenderId: "628928317433",
  appId: "1:628928317433:web:9820c7ce15ce4582251f28",
  measurementId: "G-GBQG2J8JCW",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
