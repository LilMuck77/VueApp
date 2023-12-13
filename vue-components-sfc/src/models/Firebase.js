// Your web app's Firebase configuration
// alert('add your firebase config in models/Firebase.js');

const firebaseConfig = {

    apiKey: "AIzaSyBtIgEown8i9zx7-W4Ma-bXxUcKf4T7oxM",

    authDomain: "fir-demo-5075f.firebaseapp.com",

    projectId: "fir-demo-5075f",

    storageBucket: "fir-demo-5075f.appspot.com",

    messagingSenderId: "609901496182",

    appId: "1:609901496182:web:4b5300abc2cf535b22dc57",

    measurementId: "G-9CM5D1JFD3"

};


firebase.initializeApp(firebaseConfig);

// Create references to firestore and storage
const db = firebase.firestore();
const storage = firebase.storage().ref();


export default db;