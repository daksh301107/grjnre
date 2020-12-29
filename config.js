import * as firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyBTqNG1MAHdLEYEBAiKs8VCIbAz3Kr4wh4",
  authDomain: "wily-25b93.firebaseapp.com",
  databaseURL: "https://wily-25b93.firebaseio.com",
  projectId: "wily-25b93",
  storageBucket: "wily-25b93.appspot.com",
  messagingSenderId: "1083976210346",
  appId: "1:1083976210346:web:933d572f0aa18dad607dd3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
