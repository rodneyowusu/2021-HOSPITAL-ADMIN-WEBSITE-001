import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZnr2rZGoSdWmDUXWilkT46I4z3G6c57U",
  authDomain: "ayirehospital-b18c3.firebaseapp.com",
  databaseURL: "https://ayirehospital-b18c3-default-rtdb.firebaseio.com",
  projectId: "ayirehospital-b18c3",
  storageBucket: "ayirehospital-b18c3.appspot.com",
  messagingSenderId: "508204208019",
  appId: "1:508204208019:web:842e75fba9310159d22266",
  measurementId: "G-F8EHTTECPV",
});

var db = firebaseApp.firestore();

export { db };
